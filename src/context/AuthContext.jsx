import { useEffect, createContext, useContext, useState } from "react";
import { auth, db } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";


const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }
    , []);

    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLoggedIn(true);
            getUserType(user.email);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
    }

    const usersCollectionRef = collection(db, 'users');

    const getUserType = async (email) => {
        try {
            const users = await getDocs(usersCollectionRef);
            const user = users.docs.find((doc) => doc.data().email === email);
            if(user) {
                // console.log(user.data().userType)
                setUserType(user.data().userType);
            }
        } catch (err) {
            console.error(err);
        }
    
    }

    const value = {
        currentUser,
        userLoggedIn,
        userType
    }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}