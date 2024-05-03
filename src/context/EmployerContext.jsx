import {
    collection,
    getDocs
} from 'firebase/firestore';
import { createContext, useState, useContext, useEffect } from 'react';
import { db } from '../config/firebase';
const EmployerContext = createContext();

export function useEmployerContext() {
    return useContext(EmployerContext);
}

export const EmployerContextProvider = ({ children }) => {

    const [queryData, setQueryData] = useState({});
    const [searchedData, setSearchedData] = useState({});

    // Function handling select change
    const handleSelectChange = (index, value) => {
        setQueryData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                select: value
            }
        }))
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
        setQueryData( prevState => ({
            ...prevState,
            [index]: {
                ...prevState[index],
                input: value
            }
        }))
    }

    const candidateCollectionRef = collection(db, 'candidate-experience');

    // Function creating query from queryData
    const createQuery = async (data) => {
        let query = "";
        const allData = await getDocs(candidateCollectionRef);
        return allData;
        // setSearchedData(allData);
    }

    // Function handling form submission
    const handleFormSubmit = async () => {

        //Validate for empty fields
        for (const key in queryData) {
            if (queryData.hasOwnProperty(key)) {
                if(queryData[key].select === "" || queryData[key].input === "") {
                    console.log("empty field")
                    return;
                }
            }
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

        const convertedData = convertToDbFormat(queryData);
        // console.log(convertedData)

        const allData = await createQuery(convertedData);
        console.log(allData)

        
        // allData.docs.map(doc => console.log(doc.data()))
        allData.docs.map(doc => {
            // experience of candidates
            console.log("experience", doc.data().experience)
            // email of candidates
            console.log("email", doc.data().email)
        })

        // CREATE A FUNCTION TO GENERATE TILES OF CANDIDATES WITH THEIR INFORMATION
        // ON CLICK ON BUTTON FOR *DISPLAY* OPEN WINDOW OF CANDIDATE INFORMATION SUCH AS EMAIL

        
        // // Check if the user has filled out experience form before
        // if (existingExperience) {
        //     handleFormUpdate(id, convertedData);
        // } else {
        //     handleFormAdd(convertedData);
        // }
    }

    const value = {
        queryData,
        setQueryData,
        handleSelectChange,
        handleInputChange,
        handleFormSubmit
    }

  return (
    <EmployerContext.Provider value={value}>
        {children}
    </EmployerContext.Provider>
  )
}