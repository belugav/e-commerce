// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQfkTMCnvijelr0OMIDEWDHt3VehPdedY",
  authDomain: "traveller-457f5.firebaseapp.com",
  projectId: "traveller-457f5",
  storageBucket: "traveller-457f5.appspot.com",
  messagingSenderId: "427112015411",
  appId: "1:427112015411:web:0a904a4de43a3b049aa546",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore (app)
export default db;