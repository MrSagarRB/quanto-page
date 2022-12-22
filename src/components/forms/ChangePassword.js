import React from "react";

const ChangePassword = () => {
  return (
    <div>
      <div className="form-container">
        <div>
          <p> Current Password</p>
          <input type="password" placeholder="**********" />
        </div>
        <div>
          <p> New Password</p>
          <input type="password" placeholder="**********" />
        </div>
        <div>
          <p> Re-type New Password</p>
          <input type="password" placeholder="**********" />
        </div>
        <div>
          <button className="w-full bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
