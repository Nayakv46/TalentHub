import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

const EmailRegister = ({ userType }) => {

    const userTypeUpper = userType.charAt(0).toUpperCase() + userType.slice(1);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usersCollectionRef = collection(db, 'users');

    const [showLoader, setShowLoader] = useState(false);

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
        setShowLoader(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            handleUserType();
        } catch (error) {
            console.error(error);
            if(error.code == "auth/email-already-in-use") {
                console.log("Email already exists");
            }
        } finally {
            setShowLoader(false);
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
            <button onClick={handleSignIn}>Sign In as {userTypeUpper}</button>
            {showLoader && <div className="loader"></div>}
        </div>
    )
}

export default EmailRegister