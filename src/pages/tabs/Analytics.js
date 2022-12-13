import React from "react";
import StatsCard from "../../components/StatsCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

let StatsCardData = [
  {
    title: "Money Earned",
    subTitle: "The money you earned till now.",
    value: "20.00",
    icon: <TrendingUpIcon />,
  },
  {
    title: "Survey Completed",
    subTitle: "Your Completed Survey. ",
    value: "10.00",
  },
  {
    title: "Available Money",
    subTitle: "The money you are left with. ",
    value: "50.00",
  },
];

const Analytics = () => {
  return (
    <div className=" h-full w-full flex flex-col gap-[20px]">
      <div className=" w-full flex items-center justify-between">
        {" "}
        <p className="text-[#ADB3CC] text-[32px]"> Dashboard </p>{" "}
        <div className="flex items-center gap-[2px] text-[#42BBFF] hover:text-[#fff] duration-300">
          {" "}
          <a href="#"> Overview</a>{" "}
          <div>
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: "15px" }} />
          </div>
        </div>
      </div>
      <div className=" grid gap-[40px]  grid-cols-1 md:grid-cols-3">
        {StatsCardData.map((item) => {
          return (
            <StatsCard
              title={item.title}
              subTitle={item.subTitle}
              value={item.value}
              icon={item.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Analytics;
