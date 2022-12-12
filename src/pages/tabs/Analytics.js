import React from "react";
import StatsCard from "../../components/StatsCard";

const Analytics = () => {
  return (
    <div className=" h-full w-full flex flex-col gap-[20px]">
      <div className=" w-full flex items-center justify-between">
        {" "}
        <p className="text-[#ADB3CC] text-[32px]"> Dashboard </p>{" "}
        <div className="flex items-center gap-[10px]">
          {" "}
          <a href="#" className="text-[#42BBFF] hover:text-[#fff]">
            {" "}
            Overview
          </a>{" "}
          <div className="border border-red-600 p-2 rounded-full h-[20px] w-[20px] flex items-center justify-center text-[10px]">
            !
          </div>
        </div>
      </div>
      <div className=" grid gap-[40px]  grid-cols-1 md:grid-cols-3">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </div>
  );
};

export default Analytics;
