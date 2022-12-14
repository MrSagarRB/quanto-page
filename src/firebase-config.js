import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Testing Database
const firebaseConfig = {
  apiKey: "AIzaSyCV3COghlTOAh1w-7sKhAYomxDRwxOHVz8",
  authDomain: "mirats-quanto-310ff.firebaseapp.com",
  projectId: "mirats-quanto-310ff",
  storageBucket: "mirats-quanto-310ff.appspot.com",
  messagingSenderId: "231221307926",
  appId: "1:231221307926:web:f790e844e2b3aaabd32337",
};

// Main Database
// const firebaseConfig = {
//   apiKey: "AIzaSyAO0IBzGDCaHTmAWkohr5IzUE7fSzH239U",
//   authDomain: "macer-research.firebaseapp.com",
//   databaseURL: "https://macer-research.firebaseio.com",
//   projectId: "macer-research",
//   storageBucket: "macer-research.appspot.com",
//   messagingSenderId: "714756968325",
//   appId: "1:714756968325:web:93c0428b0d60d5eadbfeec",
//   measurementId: "G-23LX3T9DPM",
// };

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_SECRET_API_KEY,
//   authDomain: process.env.REACT_APP_SECRET_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_SECRET_DATABASE_URL,
//   projectId: process.env.REACT_APP_SECRET_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_SECRET_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_SECRET_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_SECRE_APP_ID,
//   measurementId: process.env.REACT_APP_SECRET_MESURMENT_ID,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
