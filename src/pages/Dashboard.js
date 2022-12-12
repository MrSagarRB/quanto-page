import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SettingsIcon from "@mui/icons-material/Settings";
import Analytics from "../pages/tabs/Analytics";
import PanelistProfile from "./tabs/PanelistProfile";
import Setting from "./tabs/Setting";

let menuData = [
  {
    title: "Dashbord",
    icon: <DashboardIcon />,
    tab: <Analytics />,
  },
  {
    title: "Panelist Profile",
    icon: <FormatListBulletedIcon />,
    tab: <PanelistProfile />,
  },
  {
    title: "Setting",
    icon: <SettingsIcon />,
    tab: <Setting />,
  },
];
const Dashboard = () => {
  let [expand, setExpand] = useState(false);
  let [activeTab, setActiveTab] = useState(0);
  return (
    <div className=" h-screen w-full bg-[#0D1519]  flex">
      <div
        className={`  ${
          expand ? "w-[250px]" : "w-[65px]"
        } h-full  bg-[#171B2D] overflow-hidden duration-700 border-r-[1px] border-[#262835] `}
      >
        <Sidebar
          menuData={menuData}
          expand={expand}
          setExpand={setExpand}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
      </div>
      <div className=" overflow-y-scroll relative w-full">
        <div className="h-[60px] w-full sticky top-0  bg-[#171B2D]  ">
          <div className=" h-full flex items-center justify-between px-[30px] ">
            <div className="w-[370px] bg-[#1D2032] h-[35px] rounded-[8px] overflow-hidden  text-[#fff] flex items-center px-[10px]">
              <input
                type="text"
                className="bg-[#1D2032] outline-none h-full w-full px-[10px] "
                placeholder="Search"
              />

              <SearchIcon className="text-[#424A70]" />
            </div>
            <div className="flex gap-[22px] items-center">
              <NotificationsIcon
                className="text-[#ADB3CC]"
                sx={{ fontSize: "30px" }}
              />
              <div className="flex items-center gap-[16px]">
                <Avatar sx={{ bgcolor: deepOrange[500] }}>SA</Avatar>
                <div className=" flex flex-col">
                  <p className="text-[#55597D] text-[10px] font-[400]">
                    Welcome
                  </p>
                  <p className="text-[#ADB3CC] text-[16px] font-[600]  hover:text-[#42BBFF] cursor-pointer duration-300">
                    {" "}
                    Daniel Estasmos <ArrowDropDownIcon />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  h-full text-white bg-[#171B2D] px-[30px] py-[60px]">
          {menuData[activeTab]?.tab}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
