import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const EmailRegister = ({ userType }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usersCollectionRef = collection(db, 'users');

    const handleUserType = async () => {
        try{
            // get all users
            const users = await getDocs(usersCollectionRef);
            // // check if user email exists
            // const userExists = users.docs.find((doc) => doc.data().email === email);
            // check if user email with user type exists
            const userExistsWithUserType = users.docs.find((doc) => doc.data().email === email && doc.data().userType === userType);
            if(userExistsWithUserType ) return;
            // if user email does not exist, add user email and user type to users collection

            await addDoc(usersCollectionRef, {
                email: email,
                userType: userType
            });
        } catch(err){
            console.error(err);
        }
    }

    const handleSignIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            handleUserType();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder="Enter password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    )
}

export default EmailRegister