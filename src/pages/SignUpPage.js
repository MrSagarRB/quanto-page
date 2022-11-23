import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from "firebase/auth";

const SignUpPage = () => {
  let [newUser, setNewUser] = useState();

  // async function getUsers() {
  //   const userRef = collection(db, "users");
  //   const data = await getDocs(userRef);
  //   data?.forEach((d) => {
  //     console.log(d?.id);
  //     console.log(d?.data());
  //   });
  // }

  // Store Users
  let handelSave = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        newUser.email,
        newUser.password
      ).then(async (result) => {
        const user_uid = result.user.uid;

        await setDoc(doc(db, "Panellist2", user_uid), newUser, {
          merge: true,
        }).then(() => {
          console.log("employee registered!");
        });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  let handelInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };

  // Get User From Firestore

  // useEffect(() => {
  //   getUsers();
  // }, []);

  return (
    <div className="h-screen w-full flex flex-col items-center  ">
      <div className="   w-[500px] mt-[100px]  pb-[100px]  flex flex-col items-center">
        <p className="text-[32px] font-[600] text-[#111]">
          Sign in to Mirats Quanto
        </p>
        <div className=" w-full flex flex-col gap-[40px]">
          <div className="w-full    flex flex-col gap-[15px]  mt-[20px] ">
            <div className="flex gap-[20px]">
              <input
                type="text"
                className="cutom-input"
                placeholder="First Name"
                name="firstname"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
              <input
                type="text"
                className="cutom-input"
                placeholder="Last Name"
                name="lastname"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div>
              <p className="mb-[5px]"> Birth Date</p>
              <input
                type="date"
                className="cutom-input"
                name="birthday"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div>
              <input
                name="country"
                placeholder="Country"
                onChange={(e) => {
                  handelInputChange(e);
                }}
                className="cutom-input "
              />
            </div>
            <div>
              <input
                name="region"
                placeholder="Region"
                onChange={(e) => {
                  handelInputChange(e);
                }}
                className="cutom-input "
              />
            </div>
          </div>
          {/*  */}
          <div className="w-full flex flex-col gap-[15px]">
            <div className="">
              <input
                type="email"
                className="cutom-input"
                placeholder="abc@xyz.com"
                name="email"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div>
              <p className="mb-[5px]"> This will be your new Apple ID.</p>
              <input
                type="email"
                className="cutom-input"
                placeholder="password"
                name="password"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div className="">
              <input
                type="email"
                className="cutom-input"
                placeholder="Confirm Password"
                name="confirm-password"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
          </div>

          {/*  */}
          <div className="w-full flex flex-col gap-[15px]  ">
            <div>
              <select
                type="text"
                className="cutom-input"
                placeholder=""
                name="country-code"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              >
                <option> +91</option>
                <option> +92</option>
              </select>
            </div>
            <div className="flex gap-[15px]">
              <input
                type="text"
                className="cutom-input"
                placeholder="Mobile Number"
                name="mobileNum"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div>
              {" "}
              <p className="text-[14px] text-[#666]">
                Make sure you enter a phone number you can always access. It
                will be used to verify your identity any time you sign in on a
                new device or web browser. Messaging or data rates may apply.
              </p>
            </div>
          </div>

          {/*  */}
          <div className=" flex justify-center">
            <button
              onClick={() => {
                handelSave();
              }}
              className="bg-[#0070c9] text-[#fff] px-[20px] py-2 rounded-[4px] hover:bg-[#80b6e2] duration-300"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
