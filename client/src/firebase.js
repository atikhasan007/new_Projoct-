// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import.meta.env
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FITEBASE_API_KEY,
  authDomain: "propertyplan-208b9.firebaseapp.com",
  projectId: "propertyplan-208b9",
  storageBucket: "propertyplan-208b9.firebasestorage.app",
  messagingSenderId: "770439262286",
  appId: "1:770439262286:web:7c62c311e28192b129531f"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);