import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextProvider } from "../Context";

const Header = () => {
  const navigate = useNavigate();
  let { user, loading, logOutUser, userData } = useContext(ContextProvider);

  return (
    <div className="h-[60px] header-bg shadow-sm border-b px-[100px] flex items-center justify-between sticky top-0 z-50">
      <p className="text-[24px] font-[600]">Quanto</p>{" "}
      <div className="flex gap-[40px]">
        {user ? (
          <Link to="/dashboard">
            <p>{user.email}</p>
          </Link>
        ) : !loading ? (
          <Link to="/login">
            <p>Login</p>
          </Link>
        ) : (
          ""
        )}

        {user ? (
          <button
            onClick={() => {
              logOutUser();
              navigate("/");
            }}
          >
            Log Out
          </button>
        ) : !loading ? (
          <Link to="/sign-up">
            <p> Sign Up</p>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
