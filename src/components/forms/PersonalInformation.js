import React, { useState } from "react";
import countryList from "../../raw-json/country-list.json";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";

const PersonalInformation = ({ userData, user }) => {
  let [updatedUser, setUpdatedUser] = useState();
  const navigate = useNavigate();

  let handelInputChange = (e) => {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(updatedUser);

  let handelUpadteUser = async () => {
    const docRef = doc(db, "Panellist2", user.uid);
    console.log(updatedUser);
    await updateDoc(docRef, updatedUser).then(alert("Updated"));
  };

  return (
    <div className="form-container">
      <div className="flex  gap-[20px]">
        <div className="w-[50%]">
          <p> Full Name</p>
          <input
            type="text"
            placeholder={userData?.firstname}
            name="firstname"
            onChange={(e) => {
              handelInputChange(e);
            }}
          />
        </div>
        <div className="w-[50%]">
          <p> Last Name</p>
          <input
            type="text"
            placeholder={userData?.lastname}
            name="lastname"
            onChange={(e) => {
              handelInputChange(e);
            }}
          />
        </div>
      </div>
      <div>
        <p> Email Id</p>
        <input type="text" placeholder={user.email} disabled />
      </div>
      <div>
        <p> Date of Birth</p>
        <input
          type="date"
          name="birthday"
          onChange={(e) => {
            handelInputChange(e);
          }}
        />
      </div>
      <div>
        <p>Gender</p>
        <select
          name="gender"
          onChange={(e) => {
            handelInputChange(e);
          }}
        >
          <option>Male</option> <option>Female</option>{" "}
        </select>
      </div>
      <div>
        <p>Zip Code</p>
        <input
          name="postalcode"
          onChange={(e) => {
            handelInputChange(e);
          }}
          type="text"
          placeholder={userData?.postalcode}
        />
      </div>
      <div>
        <p>Country</p>
        <select
          name="country"
          onChange={(e) => {
            handelInputChange(e);
          }}
          type="text"
          placeholder="sagar.html5@gmail.com"
        >
          {countryList.map((item, ind) => {
            return (
              <option key={ind} value={item?.code}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button
          onClick={() => handelUpadteUser()}
          className="w-full bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
