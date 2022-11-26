import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";

const Header = () => {
  let { user } = useContext(ContextProvider);

  return (
    <div className="h-[60px] header-bg shadow-sm border-b px-[100px] flex items-center justify-between sticky top-0 ">
      <p className="text-[24px] font-[600]">Home app</p>{" "}
      <div className="flex gap-[40px]">
        {user ? (
          <Link to="/dashboard">
            <p>{user.email}</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}

        {user ? (
          <button>Log Out</button>
        ) : (
          <Link to="/sign-up">
            <p> Sign Up</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
