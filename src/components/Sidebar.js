import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import Analytics from "../pages/tabs/Analytics";
import { Squeeze as Hamburger } from "hamburger-react";

let menuData = [
  {
    title: "Dashbord",
    icon: <DashboardIcon />,
    tab: <Analytics />,
  },
  {
    title: "Panellist Profile",
    icon: <FormatListBulletedIcon />,
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
  },
];

const Sidebar = ({ expand, setExpand, activeTab, setActiveTab }) => {
  console.log(expand);
  return (
    <div className="">
      <div
        onClick={() => {
          setExpand(!expand);
        }}
        className="h-[60px]   overflow-hidden  flex items-center justify-center text-[#ADB3CC]  cursor-pointer"
      >
        <Hamburger toggled={expand} toggle={setExpand} />
      </div>
      <div className=" flex flex-col gap-[24px] text-[#ADB3CC] mt-[60px] px-[20px]">
        {menuData.map((item, ind) => {
          return (
            <div
              key={ind}
              onClick={() => {
                setActiveTab(ind);
              }}
              className={`${
                activeTab === ind && "text-[#42BBFF] "
              } flex items-center gap-[20px] w-[200px] overflow-hidden cursor-pointer  duration-700 `}
            >
              <div className="hover:scale-110 duration-300"> {item.icon} </div>
              <p className="text-[14px] ">{item.title}</p>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
