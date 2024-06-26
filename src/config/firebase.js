import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJiDSWhyNAj8kOANdKmzTKxN4JKsTK2Ek",
  authDomain: "talenthub-b2fc8.firebaseapp.com",
  projectId: "talenthub-b2fc8",
  storageBucket: "talenthub-b2fc8.appspot.com",
  messagingSenderId: "196883685981",
  appId: "1:196883685981:web:02cfdad57ce6081be523b4",
  measurementId: "G-VCHPZ8602E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);