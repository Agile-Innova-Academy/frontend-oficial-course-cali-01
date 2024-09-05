import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBicCRow16KH8BHDI2hPU56xGj7TMUsPpM",
  authDomain: "workoutapp-a582d.firebaseapp.com",
  projectId: "workoutapp-a582d",
  storageBucket: "workoutapp-a582d.appspot.com",
  messagingSenderId: "854224472820",
  appId: "1:854224472820:web:6cf738ea868d751e1eaca1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

export default app;