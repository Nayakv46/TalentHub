import { auth, googleProvider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleAuth = () => {

    const handleSignInWithGoogle = async () => {
        try {
            // const user = await createUserWithEmailAndPassword(auth, email, password);
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
  )
}

export default GoogleAuth