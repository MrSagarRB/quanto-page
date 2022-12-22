import React, { useContext, useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { ContextProvider } from "../../Context";

const ChangePassword = () => {
  let [passord, setPassword] = useState();

  let { user } = useContext(ContextProvider);
  let handelChangePassword = () => {
    passord.newPass1 === passord.newPass2
      ? updatePassword(user, passord.newPass2)
          .then(() => {
            alert("Password Changed");
          })
          .catch((error) => {
            // An error ocurred
            // ...
          })
      : alert("Password not Match ");

    // console.log(passord);
  };

  let handelInputChange = (e) => {
    setPassword({ ...passord, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="form-container">
        <div>
          <p> Current Password</p>
          <input
            name="curruntPass"
            onChange={(e) => handelInputChange(e)}
            type="password"
            placeholder="**********"
          />
        </div>
        <div>
          <p> New Password</p>
          <input
            name="newPass1"
            onChange={(e) => handelInputChange(e)}
            type="password"
            placeholder="**********"
          />
        </div>
        <div>
          <p> Re-type New Password</p>
          <input
            name="newPass2"
            onChange={(e) => handelInputChange(e)}
            type="password"
            placeholder="**********"
          />
        </div>
        <div>
          <button
            onClick={() => {
              handelChangePassword();
            }}
            className="w-full bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
