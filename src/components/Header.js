import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-[60px] header-bg shadow-sm border-b px-[100px] flex items-center justify-between sticky top-0 ">
      <p className="text-[24px] font-[600]">Home app</p>{" "}
      <div className="flex gap-[40px]">
        <Link to="/login">
          {" "}
          <p>Login</p>
        </Link>
        <Link to="/sign-up">
          <p> Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
