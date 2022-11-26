// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7WR3x2G827aNDcVaHE5NwpWVwppkJzB0",
  authDomain: "doctors-portal-client-b826a.firebaseapp.com",
  projectId: "doctors-portal-client-b826a",
  storageBucket: "doctors-portal-client-b826a.appspot.com",
  messagingSenderId: "931183322940",
  appId: "1:931183322940:web:6bce3ce4a97229e986e039",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app