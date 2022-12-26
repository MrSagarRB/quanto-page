import React, { useContext, useState } from "react";
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
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";
import { useNavigate } from "react-router-dom";

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
  let [toggelProfile, setToggelProfile] = useState(false);
  let { user, loading, logOutUser, userData } = useContext(ContextProvider);

  let handelProfile = () => {
    setToggelProfile(!toggelProfile);
    setTimeout(() => {
      setToggelProfile(false);
    }, 5000);
  };

  return (
    <div className=" h-screen w-full bg-[#0D1519]   flex">
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
      <div className=" overflow-y-scroll relative w-full ">
        <div className="h-[60px] w-full sticky top-0  bg-[#171B2D]  z-50  ">
          <div className=" h-full flex items-center justify-between px-[30px] ">
            <div className="w-[370px] bg-[#1D2032] h-[35px] rounded-[8px] overflow-hidden  text-[#fff] flex items-center px-[10px]">
              <input
                type="text"
                className="bg-[#1D2032] outline-none h-full w-full px-[10px] "
                placeholder="Search"
              />

              <SearchIcon className="text-[#424A70] hover:text-[#fff] duration-300 cursor-pointer" />
            </div>
            <div className="flex gap-[22px] items-center">
              <NotificationsIcon
                className="text-[#ADB3CC]"
                sx={{ fontSize: "30px" }}
              />
              <p className="text-[#fff]">{userData?.country}</p>
              {/*  */}
              {userData.firstname ? (
                <div className="flex items-center gap-[16px] tes">
                  <Avatar
                    alt="Remy Sharp"
                    src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                  >
                    SA
                  </Avatar>

                  <div className=" flex flex-col w-[150px] ">
                    <p className="text-[#55597D] text-[10px] font-[400]">
                      Welcome
                    </p>
                    <p
                      onClick={() => {
                        handelProfile();
                      }}
                      className="text-[#ADB3CC] text-[16px] font-[600]  hover:text-[#42BBFF] cursor-pointer duration-300"
                    >
                      {userData.firstname ? (
                        userData.firstname + " " + userData.lastname
                      ) : (
                        <span className="loader"></span>
                      )}
                      <ArrowDropDownIcon />
                    </p>
                  </div>
                </div>
              ) : (
                <span className="loader"></span>
              )}

              {/*  */}
            </div>
          </div>
          <div
            className={` ${
              toggelProfile ? "h-[200px]" : "h-0"
            }  w-[170px] absolute right-[30px] rounded-[8px] bg-[#2E3757] duration-300 overflow-hidden flex items-end justify-center `}
          >
            <div className=" w-full h-full relative">
              <div className=" text-[#fff] cursor-pointer absolute bottom-[20px] left-[30%] flex flex-col gap-[10px] ">
                <p>Setting </p>
                <p onClick={() => logOutUser()}>Sign Out </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white min-h-screen bg-[#171B2D] px-[30px] py-[50px]  ">
          {menuData[activeTab]?.tab}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
