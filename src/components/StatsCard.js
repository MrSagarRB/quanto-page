import React from "react";

const StatsCard = ({ title, subTitle, value, icon }) => {
  return (
    <div className="w-full 2xl:w-[400px] h-[200px] bg-[#1A1E30] flex items-center justify-between flex-col rounded-[12px] p-[30px]">
      <div className=" w-full flex flex-col gap-2">
        <div className=" w-full flex  justify-between">
          {" "}
          <p className="text-[#ADB3CC]">{title}</p>
          {icon}
        </div>
        <div className=" w-full">
          <p className="text-[32px] text-[#17B1EA]"> ${value}</p>
        </div>
      </div>
      <div className=" w-full ">
        <p className="text-[#00DE73]">{subTitle}</p>
      </div>
    </div>
  );
};

export default StatsCard;
