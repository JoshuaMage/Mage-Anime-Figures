// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
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

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Firebase Analytics only on the client-side (browser)
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Export the initialized Firebase services
export { auth, analytics };
