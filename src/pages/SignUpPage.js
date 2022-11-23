import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { collection, addDoc, getDocs, setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import countryList from "../raw-json/country-list.json";
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

  console.log(countryList);
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
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
      dollarAvailable: "0",
      dollarEarned: "0",
      surveyCompleted: "0",
    });
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
            <div className="flex flex-col gap-2">
              <p className="">Select Gender</p>
              <div className="flex gap-[30px]">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    onChange={(e) => {
                      handelInputChange(e);
                    }}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    onChange={(e) => {
                      handelInputChange(e);
                    }}
                  />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
            </div>
            <div>
              <select
                name="country"
                placeholder="Country"
                onChange={(e) => {
                  handelInputChange(e);
                }}
                className="cutom-input"
              >
                {countryList.map((item) => {
                  return <option value={item.code}>{item.name}</option>;
                })}
              </select>
            </div>
            <div>
              <input
                name="city"
                placeholder="City"
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
            <div>
              <input
                name="region"
                placeholder="Postal Code"
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
              <p className="mb-[5px]"> This will be your new Qunto ID.</p>
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
              <input
                type="password"
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
                type="password"
                className="cutom-input"
                placeholder="Confirm Password"
                name="password"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
          </div>

          {/*  */}
          <div className="w-full flex flex-col gap-[15px]  ">
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
            <div className="flex gap-[15px]">
              <select
                type="text"
                className="cutom-input"
                placeholder="E"
                name="mobileNum"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              >
                <option>Employee/Full</option>
                <option>Employee/WFH</option>
              </select>
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
