import React, { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase-config";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  let logOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged Out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  // Get user from Firebase
  async function getUsers() {
    // const userRef = collection(db, "Panellist2");
    // const data = await getDocs(userRef);
    // data?.forEach((d) => {
    //   console.log(d?.id);
    //   console.log(d?.data());
    // });
    // const q = query(
    //   collection(db, "Panellist2"),
    //   where("firstname", "==", true)
    // );
    // try {
    //   const data = await getDocs(q);
    //   // console.log(data);
    //   data?.forEach((d) => {
    //     console.log(d?.id);
    //     console.log(d?.data());
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  }

  //GET LOGGED IN USER DATA
  async function getUserData() {
    if (user?.uid) {
      const docRef = doc(db, "Panellist2", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap?.data());
      } else {
        console.log("No such document!");
      }
    }
  }

  // console.log(userData);

  useEffect(() => {
    getUserData();
  }, [user]);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <ContextProvider.Provider
      value={{ user, loading, error, logOutUser, userData }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
