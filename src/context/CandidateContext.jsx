import { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../config/firebase';
import {
    collection,
    getDocs,
    doc,
    addDoc,
    updateDoc
} from 'firebase/firestore';
import { useAuth } from './AuthContext';
import { set } from 'firebase/database';

const CandidateContext = createContext();

export function useCandidateContext() {
    return useContext(CandidateContext);
}

export const CandidateContextProvider = ({ children }) => {

    const [position, setPosition] = useState("");
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    const [formData, setFormData] = useState({});

    const [existingExperience, setExistingExperience] = useState(false);
    const [experienceId, setExperienceId] = useState("");

    const { currentUser } = useAuth();

    const userExperienceRef = collection(db, 'candidate-experience');

    // Function fetching user experience from database
    const getUserExperience = async () => {
        try {
            const userExperienceSnapshot = await getDocs(userExperienceRef);
            userExperienceSnapshot.forEach((doc) => {
                if(doc.data().email === currentUser?.email) {
                    initializeUserExperience(doc.data().experience);
                    setPosition(doc.data().position);
                    initializeYearsOfExperience(doc.data().yearsOfExperience);
                    setExistingExperience(true);
                    setExperienceId(doc.id)
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserExperience();
    }, [])

    // Function initializing user experience state from database
    const initializeUserExperience = (experience) => {
        let index = 0;
        let data = {};
        const newData = { ... data };
        for (let [key, value] of Object.entries(experience)) {
            newData[index] = {
                select: key,
                input: value
            }
            data = newData;
            index++;
        }
        setFormData(data);
    }

    const initializeYearsOfExperience = (years) => {
        if (years == undefined) {
            setYearsOfExperience(0);
        } else {
            setYearsOfExperience(Number(years));
        }
    }
    const handleYearsOfExperienceChange = (value) => {
        // Round the value to the nearest whole number
        // value = Math.round(value);
        setYearsOfExperience(value);
    }

    // Function handling select change
    const handleSelectChange = (index, value) => {
        setFormData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                select: value
            }
        }))
    }

    // Function for deleting a language from the form
    const handleRemoveExperience = async (select) => {

        setFormData(prevState => {
            const newState = { ...prevState };
            delete newState[select];

            console.log("newState", newState);
            return newState;
        })

        const convertedData = convertToDbFormat(formData);

        const removeLanguage = (obj, language) => {
            const newObj = { ...obj };
            delete newObj[language];
            return newObj;
        }

        const updatedLanguages = removeLanguage(convertedData, formData[select].select);

        // Check if the user has filled out experience form before
        if (existingExperience) {
            handleFormUpdate(experienceId, updatedLanguages);
        } else {
            handleFormAdd(convertedData);
        }
    }

    // Function handling input change
    const handleInputChange = (index, value) => {
        if(value < 0 ) {
            value = 0;
        } else if (value > 5) {
            value = 5;
        } else if (value === "") {
            value = 0;
        }
        setFormData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                input: value
            }
        }))
    }

    // Function updating a document in database
    const handleFormUpdate = async (id, data) => {
        const experienceDoc = doc(db, 'candidate-experience', id);

        await updateDoc(experienceDoc, {
            email: currentUser.email,
            position: position,
            yearsOfExperience: Number(yearsOfExperience),
            experience: data
        })
    }

    // Function adding a new document to database
    const handleFormAdd = async (data) => {
        try {
            await addDoc(userExperienceRef, {
                email: currentUser.email,
                position: position,
                yearsOfExperience: Number(yearsOfExperience),
                experience: data
            });
        } catch (error) {
            console.error(error);
        }
        window.location.reload();
    }

    // Function converting form data to database format
    function convertToDbFormat(data) {
        let result = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                result[data[key].select] = Number(data[key].input);
            }
        }
        return result;
    }

    // Function handling form submission
    const handleFormSubmit = (id) => {

        // Validate for empty fields
        for (const key in formData) {
            if (formData.hasOwnProperty(key)) {
                if(formData[key].select === "" || formData[key].input === "") {
                    console.log("empty field")
                    return;
                }
            }
        }

        const convertedData = convertToDbFormat(formData);

        // Check if the user has filled out experience form before
        if (existingExperience) {
            handleFormUpdate(id, convertedData);
        } else {
            handleFormAdd(convertedData);
        }
    }

    const value = {
        formData,
        handleSelectChange,
        handleInputChange,
        experienceId,
        handleFormSubmit,
        yearsOfExperience,
        handleYearsOfExperienceChange,
        position,
        setPosition,
        handleRemoveExperience
    }

  return (
    <CandidateContext.Provider value={value}>
        {children}
    </CandidateContext.Provider>
  )
}