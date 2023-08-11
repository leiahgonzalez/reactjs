import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyC9_l0fOZQJHLWpuh7hndAx9r9ArNAhmXg",
  authDomain: "coderreact-4a4b0.firebaseapp.com",
  projectId: "coderreact-4a4b0",
  storageBucket: "coderreact-4a4b0.appspot.com",
  messagingSenderId: "969640376225",
  appId: "1:969640376225:web:59b3ef2b3a1ff9dfee7de0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

