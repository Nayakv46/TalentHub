import './emailLogin.scss';
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../Loader/Loader";
import useMountTransition from '../../utils/useMountTransition';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const EmailRegister = ({ userType }) => {

    const userTypeUpper = userType.charAt(0).toUpperCase() + userType.slice(1);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [missingPassword, setMissingPassword] = useState(false);
    const [invalidCredential, setInvalidCredential] = useState(false);

    const usersCollectionRef = collection(db, 'users');

    const [showLoader, setShowLoader] = useState(false);

    const hasTransitionedInPW = useMountTransition(missingPassword, 250);
    const hasTransitionedInInvEmail = useMountTransition(invalidEmail, 250);
    const hasTransitionedInInvCred = useMountTransition(invalidCredential, 250);

    const { setUserType } = useAuth();

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

            // await addDoc(usersCollectionRef, {
            //     email: email,
            //     userType: userType
            // });

            setUserType(userType);
        } catch(err){
            console.error(err);
        } finally {
            navigateTo(`/${userType}`)
        }
    }
    const navigateTo = useNavigate();

    const handleSignIn = async () => {
        setShowLoader(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            handleUserType();
        } catch (error) {
            console.error(error);
            if (error.code == "auth/missing-password") {
                console.log("Password is required");
                setMissingPassword(true);
                setTimeout(() => {
                    setMissingPassword(false);
                }, 5000);
            } else if (error.code == "auth/invalid-email") {
                console.log("Invalid email");
                setInvalidEmail(true);
                setTimeout(() => {
                    setInvalidEmail(false);
                }, 5000);
            } else if (error.code == "auth/invalid-credential") {
                console.log("Invalid credentials");
                setInvalidCredential(true);
                setTimeout(() => {
                    setInvalidCredential(false);
                }, 5000);
            }
        } finally {
            setShowLoader(false);
        }
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleSignIn();
        }
    }

    return (
        <div className="email-login">
            <div className='input-wrapper'>

                <input
                    id="login-email"
                    required
                    className={`email-login__input ${(invalidCredential || invalidEmail) && `email-login__input--error`}`}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />

                <label
                    htmlFor="login-email"
                    className='email-login__label'
                >
                    Enter email
                </label>

                {(hasTransitionedInInvEmail || invalidEmail) &&
                    <div className={`email-login__error ${hasTransitionedInInvEmail && `in`} ${invalidEmail && `visible`}`}>
                        Invalid email
                    </div>
                }
            </div>


            <div className='input-wrapper'>
                <input
                    id="login-password"
                    type="password"
                    required
                    className={`email-login__input ${(missingPassword || invalidCredential) && `email-login__input--error`}`}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => handleEnter(e)}
                />

                <label
                    htmlFor="login-password"
                    className='email-login__label'
                >
                    Enter password
                </label>

                {(hasTransitionedInPW || missingPassword) &&
                    <div className={`email-login__error ${hasTransitionedInPW && `in`} ${missingPassword && `visible`}`}>
                        Password is required
                    </div>
                }
            </div>



            <div className='email-login__confirm'>
                {(hasTransitionedInInvCred || invalidCredential) &&
                    <div className={`email-login__error ${hasTransitionedInInvCred && `in`} ${invalidCredential && `visible`}`}>
                        Invalid credentials
                    </div>
                }
                <button
                    className='email-login__button'
                    onClick={handleSignIn}
                >
                    Login as {userTypeUpper}
                </button>
                {showLoader && <Loader />}
            </div>
        </div>
    )
}

export default EmailRegister