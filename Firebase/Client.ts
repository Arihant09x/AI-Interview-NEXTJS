// Import the functions you need from the SDKs you need
import {initializeApp,getApps} from "firebase/app"
import {getAuth}from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFg0V2LvEhvxRZlA2vBRS6vIWwaEf5-b4",
    authDomain: "crackwise-a1b77.firebaseapp.com",
    projectId: "crackwise-a1b77",
    storageBucket: "crackwise-a1b77.firebasestorage.app",
    messagingSenderId: "720029411526",
    appId: "1:720029411526:web:9f16fba85920c98b450fc7",
    measurementId: "G-XZ8Z68C1EE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db=getFirestore(app);
