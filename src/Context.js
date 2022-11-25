import React, { createContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase-config";
import { getAuth, signOut } from "firebase/auth";

export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
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

  return (
    <ContextProvider.Provider value={{ user, loading, error, logOutUser }}>
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
