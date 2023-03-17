// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZVmiAon9P2pI4O1wQJnRpooZgoKw4Y7o",
  authDomain: "eyewear-83812.firebaseapp.com",
  projectId: "eyewear-83812",
  storageBucket: "eyewear-83812.appspot.com",
  messagingSenderId: "117389934063",
  appId: "1:117389934063:web:343adbebe5be9f5d08ca1a",
  measurementId: "G-1E0TTJHE9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const db=getFirestore(app);