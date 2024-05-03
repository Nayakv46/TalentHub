import { createContext, useState, useContext, useEffect } from 'react';

const EmployerContext = createContext();

export function useEmployerContext() {
    return useContext(EmployerContext);
}

export const EmployerContextProvider = ({ children }) => {

    const [queryData, setQueryData] = useState({});

    const value = {
        queryData,
        setQueryData
    }

  return (
    <EmployerContext.Provider value={value}>
        {children}
    </EmployerContext.Provider>
  )
}