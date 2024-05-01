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
            const userTypeSnapshot = await getUserType(user.email);
            if (userTypeSnapshot) {
                setUserType(userTypeSnapshot)
            }
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setUserType(null);
        }
    }

    async function getUserType (userEmail) {

        const usersCollectionRef = collection(db, 'users');
        const users = await getDocs(usersCollectionRef);
        users.forEach((doc) => {
            if(doc.data().email === userEmail) {
                setUserType(doc.data().userType);
            }
        })
    }

    const value = {
        currentUser,
        userLoggedIn,
        userType,
        setUserType
    }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}