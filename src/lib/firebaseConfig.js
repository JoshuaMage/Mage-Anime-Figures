// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGOZIvnm7GbPUwpP12CEjYqs1BOg5G_E8",
  authDomain: "mage-anime-figures-f91a3.firebaseapp.com",
  databaseURL: "https://mage-anime-figures-f91a3-default-rtdb.firebaseio.com",
  projectId: "mage-anime-figures-f91a3",
  storageBucket: "mage-anime-figures-f91a3.firebasestorage.app",
  messagingSenderId: "771814892177",
  appId: "1:771814892177:web:3939a1b3c77ff89a9d1530",
  measurementId: "G-MNCSECRB5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);