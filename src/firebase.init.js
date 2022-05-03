// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0_oZdpv2Zl1q8OOKTq5h9Du6BeWeI1xI",
  authDomain: "dudsfashion-auth.firebaseapp.com",
  projectId: "dudsfashion-auth",
  storageBucket: "dudsfashion-auth.appspot.com",
  messagingSenderId: "369427650022",
  appId: "1:369427650022:web:ebdc9217d9e1a41ce23227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;