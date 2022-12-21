import React from "react";

const Setting = () => {
  let tabName = [
    {
      title: "Profile Details",
      icon: "",
    },
    {
      title: "Change Password",
      icon: "",
    },
    {
      title: "Delete Account",
      icon: "",
    },
    {
      title: "Unsubscribe Quanto",
      icon: "",
    },
  ];

  return (
    <div className=" ">
      <div className="">
        <h1 className="text-[#ADB3CC] text-[32px]">Setting </h1>
      </div>

      <div className=" bg-[#1A1E30] p-[24px]">
        <p>Update Basic Profile Settings</p>
        <div className=" flex gap-[20px] h-full mt-[46px] ">
          <div className="h-[347px] w-[271px] bg-[#2E3757] rounded-[12px] ">
            <div className="w-full h-[20%] flex items-center border-b border-b-[#DFE4FF33]  gap-[17px] p-[22px]">
              <div className="h-[50px] w-[50px] bg-[#D9D9D9] rounded-full"></div>
              <p>Sagar Borude</p>
            </div>
            <div className="h-[80%] flex flex-col justify-between p-[30px] ">
              {tabName.map((item) => {
                return (
                  <div className="flex gap-[10px] ">
                    <div className="bg-[#42BBFF] w-[24px] h-[24px] rounded-full"></div>{" "}
                    <p className="font-[600] text-[16px]">Profile Details</p>{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-[#2E3757] w-full rounded-[12px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
