import { createContext, useState, useContext, useEffect } from 'react';

const EmployerContext = createContext();

export function useEmployerContext() {
    return useContext(EmployerContext);
}

export const EmployerContextProvider = ({ children }) => {

    const [queryData, setQueryData] = useState({});

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

    const value = {
        queryData,
        setQueryData,
        handleSelectChange,
        handleInputChange
    }

  return (
    <EmployerContext.Provider value={value}>
        {children}
    </EmployerContext.Provider>
  )
}