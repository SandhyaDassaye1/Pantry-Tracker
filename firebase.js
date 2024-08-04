// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2eP57-IEjBWtHN1gyf0bL_ToWr_hhL0o",
  authDomain: "inventory-management-99ba3.firebaseapp.com",
  projectId: "inventory-management-99ba3",
  storageBucket: "inventory-management-99ba3.appspot.com",
  messagingSenderId: "998362844385",
  appId: "1:998362844385:web:1ba89ee412955b26977ba0",
  measurementId: "G-03W1E4VBRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore};