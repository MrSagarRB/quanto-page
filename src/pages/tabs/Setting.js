import { Avatar } from "@mui/material";
import React, { useContext, useState } from "react";
import ChangePassword from "../../components/forms/ChangePassword";
import DeleteAccount from "../../components/forms/DeleteAccount";
import PersonalInformation from "../../components/forms/PersonalInformation";
import UnsubscribeAccount from "../../components/forms/UnsubscribeAccount";
import { ContextProvider } from "../../Context";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import HttpsIcon from "@mui/icons-material/Https";
import DeleteIcon from "@mui/icons-material/Delete";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";

const Setting = () => {
  let [activeTab, setActiveTab] = useState(0);
  let { user, loading, logOutUser, userData } = useContext(ContextProvider);

  let tabData = [
    {
      title: "Profile Details",
      icon: <ManageAccountsIcon />,
    },
    {
      title: "Change Password",
      icon: <HttpsIcon />,
    },
    {
      title: "Delete Account",
      icon: <DeleteIcon />,
    },
    {
      title: "Unsubscribe Quanto",
      icon: <UnsubscribeIcon />,
    },
  ];

  let tabComponents = [
    <PersonalInformation userData={userData} user={user} />,
    <ChangePassword />,
    <DeleteAccount />,
    <UnsubscribeAccount />,
  ];

  return (
    <div className=" ">
      <div className="">
        <h1 className="text-[#ADB3CC] text-[32px]">Setting </h1>
      </div>

      <div className=" bg-[#1A1E30] p-[24px]">
        <p>Update Basic Profile Settings</p>
        <div className=" flex gap-[20px] h-full mt-[46px] ">
          <div className="h-[300px] w-[350px] bg-[#2E3757] rounded-[12px]  ">
            <div className="w-full h-[20%] flex items-center border-b border-b-[#DFE4FF33]  gap-[17px] p-[22px] ">
              {/* <div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full"></div> */}
              <Avatar
                alt="Remy Sharp"
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
              >
                SA
              </Avatar>
              <p>Sagar Borude</p>
            </div>
            <div className="h-[80%] flex flex-col gap-[20px]  p-[30px] ">
              {tabData.map((item, ind) => {
                return (
                  <div
                    key={ind}
                    className="flex gap-[10px] cursor-pointer "
                    onClick={() => {
                      setActiveTab(ind);
                    }}
                  >
                    <div
                      className={`${
                        ind === activeTab ? "text-[#42BBFF]" : "text-[#D9D9D9] "
                      } flex items-center justify-center rounded-full `}
                    >
                      {" "}
                      {item.icon}{" "}
                    </div>{" "}
                    <p
                      className={` ${
                        ind === activeTab
                          ? "text-[#42BBFF] font-[600]"
                          : "text-[#D9D9D9] font-[300] "
                      }  text-[16px]`}
                    >
                      {item.title}
                    </p>{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-[#2E3757] w-full rounded-[12px]">
            <div className="h-[60px] w-full border-b border-b-[#DFE4FF33] flex items-center justify-center">
              <p>{tabData[activeTab]?.title}</p>
            </div>
            <div>{tabComponents[activeTab]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
