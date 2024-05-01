import './googleAuth.scss';
import { auth, googleProvider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { db } from "../../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from 'react';
import Loader from '../Loader/Loader';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const GoogleAuth = ({ userType }) => {

    // const userTypeUpper = userType.charAt(0).toUpperCase() + userType.slice(1);

    const usersCollectionRef = collection(db, 'users');

    const [showLoader, setShowLoader] = useState(false);

    const { setUserType } = useAuth();

    const navigateTo = useNavigate();

    const handleUserType = async (email) => {
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
            setUserType(userType);
        } catch(err){
            console.error(err);
        } finally {
            navigateTo(`/${userType}`);
        }
    }

    const handleSignInWithGoogle = async () => {
        setShowLoader(true);
        try {
            const user = await signInWithPopup(auth, googleProvider);
            const email = user?.user?.email;
            handleUserType(email);
        } catch (error) {
            console.log(error);
        } finally {
            setShowLoader(false);
        }
    }

  return (
    <div className='google-auth'>
        {/* <h2>Google {userTypeUpper}</h2> */}
        <button
            className='google-auth__button'
            onClick={handleSignInWithGoogle}
        >
           <FcGoogle className='icon--google'/> Sign in with Google
        </button>
        {showLoader && <Loader />}
    </div>
  )
}

export default GoogleAuth