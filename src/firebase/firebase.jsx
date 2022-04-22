import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYaF-AD72UILaZ9VySro0yr7cULiI95UY",
  authDomain: "ecommercech-c9c88.firebaseapp.com",
  projectId: "ecommercech-c9c88",
  storageBucket: "ecommercech-c9c88.appspot.com",
  messagingSenderId: "806379608614",
  appId: "1:806379608614:web:85dd26a911a16b8fcba4e7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
