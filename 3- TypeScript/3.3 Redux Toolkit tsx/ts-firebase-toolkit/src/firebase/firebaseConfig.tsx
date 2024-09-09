import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVEN1ruKW2o2Gxf2ENSGt4LbQ18x5zYds",
  authDomain: "ts-front1.firebaseapp.com",
  projectId: "ts-front1",
  storageBucket: "ts-front1.appspot.com",
  messagingSenderId: "789328224697",
  appId: "1:789328224697:web:686776f47caca6f5d6d668",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const db = getFirestore()
