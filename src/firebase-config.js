import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAO0IBzGDCaHTmAWkohr5IzUE7fSzH239U",
  authDomain: "macer-research.firebaseapp.com",
  databaseURL: "https://macer-research.firebaseio.com",
  projectId: "macer-research",
  storageBucket: "macer-research.appspot.com",
  messagingSenderId: "714756968325",
  appId: "1:714756968325:web:93c0428b0d60d5eadbfeec",
  measurementId: "G-23LX3T9DPM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
