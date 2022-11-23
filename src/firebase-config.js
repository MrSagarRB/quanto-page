import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV3COghlTOAh1w-7sKhAYomxDRwxOHVz8",
  authDomain: "mirats-quanto-310ff.firebaseapp.com",
  projectId: "mirats-quanto-310ff",
  storageBucket: "mirats-quanto-310ff.appspot.com",
  messagingSenderId: "231221307926",
  appId: "1:231221307926:web:f790e844e2b3aaabd32337",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
