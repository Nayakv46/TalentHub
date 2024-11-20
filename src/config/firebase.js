import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYej8hl4CzUYh3jym1zq4-81umz8n7OFc",
  authDomain: "pwii-projekt.firebaseapp.com",
  projectId: "pwii-projekt",
  storageBucket: "pwii-projekt.appspot.com",
  messagingSenderId: "575535727403",
  appId: "1:575535727403:web:51fdfd2242e889a9ad7b6e",
  measurementId: "G-PW8X4SX46G"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);