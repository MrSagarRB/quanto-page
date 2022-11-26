import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase-config";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import countryList from "../raw-json/country-list.json";
import { useNavigate } from "react-router-dom";
const SignUpPage = () => {
  let [newUser, setNewUser] = useState();
  let [term, setTerm] = useState(false);
  let [credential, setCredential] = useState();
  let [validation, setValidation] = useState({ invalidPasswod: false });

  const navigate = useNavigate();

  // Store Users

  let handelSave = async () => {
    if (credential.password === credential.confirmPassword) {
      console.log(validation);

      try {
        await createUserWithEmailAndPassword(
          auth,
          credential.email,
          credential.password
        ).then(async (result) => {
          const user_uid = result.user.uid;

          await setDoc(doc(db, "Panellist2", user_uid), newUser, {
            merge: true,
          }).then(() => {
            alert("employee registered!");
            navigate("/login");
          });
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
      setValidation({ ...validation, invalidPasswod: true });
      alert("Password not Match");
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

  let handelCredentialChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

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
                required
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
                    value="male"
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
                    value="female"
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
                <option>Select Country</option>
                {countryList.map((item, ind) => {
                  return (
                    <option key={ind} value={item.code}>
                      {item.name}
                    </option>
                  );
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
                name="postalcode"
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
                  handelCredentialChange(e);
                }}
              />
            </div>
            <div>
              <input
                type="password"
                className={`cutom-input ${
                  validation.invalidPasswod ? "border-red-500" : null
                } `}
                placeholder="password"
                name="password"
                onChange={(e) => {
                  handelCredentialChange(e);
                }}
              />
            </div>
            <div className="">
              <input
                type="password"
                className={`cutom-input ${
                  validation.invalidPasswod ? "border-red-500" : null
                } `}
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={(e) => {
                  handelCredentialChange(e);
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
                name="phone"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className=""> Employement Status</p>
              <select
                type="text"
                className="cutom-input"
                name="employementStatus"
                onChange={(e) => {
                  handelInputChange(e);
                }}
              >
                <option>Employee/working full time</option>
                <option>Employee/working part time</option>
                <option>Currntly Unemployed</option>
                <option>Self Employed</option>
                <option>Home Maker</option>
              </select>
            </div>
            <div className="flex items-center  gap-3">
              <input
                onClick={(e) => {
                  console.log(e.target.checked);
                  setTerm(e.target.checked);
                }}
                type="checkbox"
                className="w-[40px] h-[40px]"
                id="term"
              />
              <label
                htmlFor="term"
                className="text-[14px] text-[#666] text-[14px]"
              >
                By clicking on this checkbox, I agree to the Quanto's —
                <a
                  href="http://panel.mirats.in/terms"
                  className="text-violet-500"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>{" "}
                and Privacy{" "}
                <a
                  href="http://panel.mirats.in/privacy-policy"
                  className="text-violet-500"
                >
                  {" "}
                  Policy
                </a>{" "}
                .
              </label>
            </div>
          </div>

          {/*  */}
          <div className={`justify-center ${term ? "flex" : "hidden"} `}>
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
