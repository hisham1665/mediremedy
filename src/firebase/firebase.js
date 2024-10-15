// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbm_m-p8cd-AsKw2UdMjbT8A0f5Y7nY-0",
  authDomain: "mediremedy-273fc.firebaseapp.com",
  projectId: "mediremedy-273fc",
  storageBucket: "mediremedy-273fc.appspot.com",
  messagingSenderId: "751354462613",
  appId: "1:751354462613:web:7f2bbe09c2d73d01cb769c",
  measurementId: "G-64799S5WGK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp); // Firestore database instance

export { db };