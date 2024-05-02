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

    return (
        <div className="email-register">
            <div className='input-wrapper'>

                <input
                    id="register-email"
                    required
                    className={`email-register__input ${(invalidCredential || invalidEmail) && `email-register__input--error`}`}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label
                    htmlFor="register-email"
                    className='email-register__label'
                >
                    Enter email
                </label>

                {(hasTransitionedInInvEmail || invalidEmail) &&
                    <div className={`email-register__error ${hasTransitionedInInvEmail && `in`} ${invalidEmail && `visible`}`}>
                        Invalid email
                    </div>
                }
            </div>


            <div className='input-wrapper'>
                <input
                    id="register-password"
                    type="password"
                    required
                    className={`email-register__input ${(missingPassword || invalidCredential) && `email-register__input--error`}`}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <label
                    htmlFor="register-password"
                    className='email-register__label'
                >
                    Enter password
                </label>

                {(hasTransitionedInPW || missingPassword) &&
                    <div className={`email-register__error ${hasTransitionedInPW && `in`} ${missingPassword && `visible`}`}>
                        Password is required
                    </div>
                }
            </div>



            <div className='email-register__confirm'>
                {(hasTransitionedInInvCred || invalidCredential) &&
                    <div className={`email-register__error ${hasTransitionedInInvCred && `in`} ${invalidCredential && `visible`}`}>
                        Invalid credentials
                    </div>
                }
                <button
                    className='email-register__button'
                    onClick={handleSignIn}
                >
                    Sign in as {userTypeUpper}
                </button>
                {showLoader && <Loader />}
            </div>
        </div>
    )
}

export default EmailRegister