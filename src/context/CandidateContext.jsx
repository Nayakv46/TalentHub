import { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const CandidateContext = createContext();

export function useCandidateContext() {
    return useContext(CandidateContext);
}

export const CandidateContextProvider = ({ children }) => {

    const [formData, setFormData] = useState({});

    const { currentUser } = useAuth();

    const userExperienceRef = collection(db, 'candidate-experience');

    const getUserExperience = async () => {
        try {
            const userExperienceSnapshot = await getDocs(userExperienceRef);
            userExperienceSnapshot.forEach((doc) => {
                if(doc.data().email === currentUser.email) {
                    initializeUserExperience(doc.data().experience);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserExperience();
    }, [])

    const initializeUserExperience = (experience) => {
        let index = 0;
        let data = {};
        const newData = { ... data };
        for (let [key, value] of Object.entries(experience)) {
            console.log(key, value);
            newData[index] = {
                select: key,
                input: value
            }
            data = newData;
            index++;
        }
        setFormData(data);
    }

    const handleSelectChange = (index, value) => {
        setFormData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                select: value
            }
        }))
    }

    const handleInputChange = (index, value) => {
        setFormData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                input: value
            }
        }))
    }

    const value = {
        formData,
        handleSelectChange,
        handleInputChange
    }

  return (
    <CandidateContext.Provider value={value}>
        {children}
    </CandidateContext.Provider>
  )
}