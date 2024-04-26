import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user)
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