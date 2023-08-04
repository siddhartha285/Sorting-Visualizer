// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyIbuyNlpdPPAZh-F1ihutgDfcwBlHqa4",
  authDomain: "chatapp-f6a20.firebaseapp.com",
  projectId: "chatapp-f6a20",
  storageBucket: "chatapp-f6a20.appspot.com",
  messagingSenderId: "1078355524142",
  appId: "1:1078355524142:web:c8f14ca47e7c52fb513dbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);