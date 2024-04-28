import { auth, googleProvider } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { db } from "../../config/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";


const GoogleAuth = ({ userType }) => {

    const userTypeUpper = userType.charAt(0).toUpperCase() + userType.slice(1);

    const usersCollectionRef = collection(db, 'users');

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
        } catch(err){
            console.error(err);
        }
    }

    const handleSignInWithGoogle = async () => {
        try {
            const user = await signInWithPopup(auth, googleProvider);
            const email = user?.user?.email;
            handleUserType(email);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <h2>Google {userTypeUpper}</h2>
        <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
    </>
  )
}

export default GoogleAuth