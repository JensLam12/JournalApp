// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth';
import { getFirestore  } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4PGCRRxZhMcFmO4aRgAJyNJGBN3KDK2w",
  authDomain: "react-journal-d617a.firebaseapp.com",
  projectId: "react-journal-d617a",
  storageBucket: "react-journal-d617a.appspot.com",
  messagingSenderId: "686428270675",
  appId: "1:686428270675:web:dc8c3a5726585e397296a6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore ( FirebaseApp);