// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYEVKx28qccho8fyduO4yGGesGH6TJEmw",
  authDomain: "evoca-f3fa3.firebaseapp.com",
  projectId: "evoca-f3fa3",
  storageBucket: "evoca-f3fa3.firebasestorage.app",
  messagingSenderId: "26536744197",
  appId: "1:26536744197:web:d9e3445898fda5cc67536c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database and export it
export const db = getFirestore(app);