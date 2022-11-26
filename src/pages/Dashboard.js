import React, { useContext, useState } from "react";
import { ContextProvider } from "../Context";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let { user, loading, error, logOutUser } = useContext(ContextProvider);
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full  bg-black text-[#ffff] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="text-[64px] hover:text-yellow-500 hover:scale-125 duration-300 cursor-pointer">
          This Is Your Dashboard <br />
        </p>
        <p className="text-[32px] text-yellow-500">{user?.email} </p>
        <button
          onClick={() => {
            logOutUser();
            navigate("/");
          }}
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
