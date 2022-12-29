// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import  { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXYVzf5cmfSpRaLXCKg5xABGIDZQeUqA0",
  authDomain: "ecommerce-835b0.firebaseapp.com",
  projectId: "ecommerce-835b0",
  storageBucket: "ecommerce-835b0.appspot.com",
  messagingSenderId: "402856896232",
  appId: "1:402856896232:web:aed8cd11519b5271fb8b5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);