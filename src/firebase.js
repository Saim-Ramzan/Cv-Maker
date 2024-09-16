// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmZTZLVkYkHd3irkhMFW7CN1IH944X6Ow",
  authDomain: "cv-maker-5d7dd.firebaseapp.com",
  projectId: "cv-maker-5d7dd",
  storageBucket: "cv-maker-5d7dd.appspot.com",
  messagingSenderId: "363599972346",
  appId: "1:363599972346:web:732e78ab03a4cb8a1c0643"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);