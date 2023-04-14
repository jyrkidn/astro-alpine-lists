// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

console.log(import.meta.env)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_APIKEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTHDOMAIN,
  databaseURL: import.meta.env.PUBLIC_FIREBASE_DATABASEURL,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.PUBLIC_FIREBASE_APPID,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
