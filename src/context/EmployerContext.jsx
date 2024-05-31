import {
    collection,
    getDocs,
    query,
    where
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
                select: value,
                input: prevState[index]?.input || 0
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

    // Function handling query object removal
    const handleRemoveObject = (indexToRemove) => {
        setQueryData(prevState => {
            // Removing an object from the queryData object based on the indexToRemove
            const newState = { ...prevState };
            delete newState[indexToRemove];

            // Shifting the indexes of the remaining objects in the queryData object
            Object.keys(newState)
            .map(key => parseInt(key))
            .filter(key => key > indexToRemove)
            .sort((a, b) => a - b)
            .forEach(key => {
                newState[key - 1] = newState[key];
                delete newState[key];
            });

            return newState;
        });
    };

    const candidateCollectionRef = collection(db, 'candidate-experience');

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
            // console.log(data);
            let result = {};
            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    result[data[key].select] = Number(data[key].input);
                }
            }
            return result;
        }

        const convertedData = convertToDbFormat(queryData);

        // Function creating query from queryData
        const createQuery = async (criteria) => {
            // Return of all data from the database
            // const allData = await getDocs(candidateCollectionRef);
            // return allData;
            let q = candidateCollectionRef;

            // Loop through the criteria object and add where clauses to the query
            let counter = 0;
            Object.keys(criteria).forEach(tech => {
                // Due to queries requiring an index, we only query with the first technology, rest is being filtered out by JS in updateSearchedData
                if (counter === 0){
                    q = query(q, where(`experience.${tech}`, '>=', criteria[tech]));
                }
                counter++;
            });

            // console.log(criteria);

            const data = await getDocs(q);
            // console.log(data.docs);
            return data;
        }

        const allData = await createQuery(convertedData);

        const updateSearchedData = (data, minExperience, minYearsOfExperience) => {

            const filteredData = data.docs
            // Filter out candidates out of whole database records
            .filter(doc => {
                const candidate = doc.data();
                const meetsYearsOfExperience = candidate.yearsOfExperience >= minYearsOfExperience;
                const meetsTechnologyRequirements = Object.keys(minExperience).every(tech =>
                    candidate.experience[tech] >= minExperience[tech]
                );
                return meetsYearsOfExperience && meetsTechnologyRequirements;
            })
            .map(doc => {
                return {
                    experience: doc.data().experience,
                    email: doc.data().email,
                    yearsOfExperience: doc.data().yearsOfExperience,
                    position: doc.data().position
                };
            });

            setSearchedData(filteredData);
            // console.log(filteredData);
        };

        updateSearchedData(allData, convertedData, 0);
    }

    const value = {
        queryData,
        setQueryData,
        handleSelectChange,
        handleInputChange,
        handleRemoveObject,
        handleFormSubmit,
        searchedData
    }

  return (
    <EmployerContext.Provider value={value}>
        {children}
    </EmployerContext.Provider>
  )
}