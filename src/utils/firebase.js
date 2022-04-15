// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEQwkN2RQR-fM-xRIi--MnaI9emxj8nuk",
  authDomain: "react-ecommerce-szpayzer.firebaseapp.com",
  projectId: "react-ecommerce-szpayzer",
  storageBucket: "react-ecommerce-szpayzer.appspot.com",
  messagingSenderId: "26648213384",
  appId: "1:26648213384:web:71a020b53711625f22ac3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db