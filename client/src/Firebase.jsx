// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwCqVC8vNgObTvztyQuySWFTAIw6X_UB8",
  authDomain: "chatapp-72abd.firebaseapp.com",
  projectId: "chatapp-72abd",
  storageBucket: "chatapp-72abd.appspot.com",
  messagingSenderId: "899482358253",
  appId: "1:899482358253:web:8b564ff38940a571d157e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
