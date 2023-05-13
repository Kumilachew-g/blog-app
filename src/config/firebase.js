// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "blog-app-97c0e.firebaseapp.com",
  projectId: "blog-app-97c0e",
  storageBucket: "blog-app-97c0e.appspot.com",
  messagingSenderId: "570365255686",
  appId: "1:570365255686:web:f32cfca9d6dd120dfba387",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
