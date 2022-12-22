import React from "react";

const PersonalInformation = () => {
  return (
    <div className="form-container">
      <div>
        <p> Full Name</p>
        <input type="text" placeholder="Avinash" />
      </div>
      <div>
        <p> Email Id</p>
        <input type="text" placeholder="sagar.html5@gmail.com" />
      </div>
      <div>
        <p> Date of Birth</p>
        <input type="date" placeholder="sagar.html5@gmail.com" />
      </div>
      <div>
        <p>Gender</p>
        <select>
          <option>Male</option> <option>Female</option>{" "}
        </select>
      </div>
      <div>
        <p>Zip Code</p>
        <input type="text" placeholder="310055" />
      </div>
      <div>
        <p>Country</p>
        <select type="text" placeholder="sagar.html5@gmail.com">
          <option> India</option>
          <option> USA</option>
        </select>
      </div>
      <div>
        <button className="w-full bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
