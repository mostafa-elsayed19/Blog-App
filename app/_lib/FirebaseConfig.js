import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJy2hHnTz1qzlxLHlrSY2fKMulAF7aeh0",
  authDomain: "blog-app-ma.firebaseapp.com",
  projectId: "blog-app-ma",
  storageBucket: "blog-app-ma.firebasestorage.app",
  messagingSenderId: "561523573675",
  appId: "1:561523573675:web:7b5206b7593b9959e388ee",
  measurementId: "G-BDDQQQLQ9V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
