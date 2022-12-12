import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  let [expand, setExpand] = useState(false);
  let [activeTab, setActiveTab] = useState(0);
  return (
    <div className=" h-screen w-full bg-[#0D1519]  flex">
      <div
        className={`  ${
          expand ? "w-[300px]" : "w-[65px]"
        } h-full  bg-[#171B2D] overflow-hidden duration-700 border-r-[1px] border-[#262835] `}
      >
        <Sidebar
          expand={expand}
          setExpand={setExpand}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      <div className=" overflow-y-scroll relative w-full">
        <div className="h-[60px] w-full sticky top-0  bg-[#171B2D] "> </div>
        <div className="  h-full text-white bg-[#171B2D]"> Sagar </div>
      </div>
    </div>
  );
};

export default Dashboard;
