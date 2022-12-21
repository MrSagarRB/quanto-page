import React, { useContext, useState } from "react";
import StatsCard from "../../components/StatsCard";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DiamondIcon from "@mui/icons-material/Diamond";
import Context, { ContextProvider } from "../../Context";

let StatsCardData = [
  {
    title: "Money Earned",
    subTitle: "The money you earned till now.",
    value: "00.00",
    icon: <TrendingUpIcon />,
  },
  {
    title: "Survey Completed",
    subTitle: "Your Completed Survey. ",
    value: "00.00",
    icon: <BookmarkBorderIcon />,
  },
  {
    title: "Available Money",
    subTitle: "The money you are left with. ",
    value: "00.00",
    icon: <DiamondIcon />,
  },
];

let surveyData = [
  {
    SurveyCode: "25672873",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
  {
    SurveyCode: "24672873",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
  {
    SurveyCode: "25678873",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
  {
    SurveyCode: "25602873",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
  {
    SurveyCode: "22622873",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
  {
    SurveyCode: "24672843",
    SurveyName: "Consumer",
    Points: "40.0",
    Participates: "Participate",
    link: "#",
  },
];

const Analytics = () => {
  let [activeCard, setActiveCard] = useState(0);
  const { userData } = useContext(ContextProvider);

  let { user } = useContext(ContextProvider);
  // console.log(user.uid);

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
        {StatsCardData.map((item, ind) => {
          return (
            <div
              key={ind}
              onClick={() => {
                setActiveCard(ind);
              }}
            >
              <StatsCard
                title={item.title}
                subTitle={item.subTitle}
                value={item.value}
                icon={item.icon}
                activeCard={activeCard}
                ind={ind}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col  gap-2">
        <p className="text-[18px] font-[600] text-[#ADB3CC]">
          Available Surveys
        </p>
        <div className=" flex justify-between ">
          <div className="text-[16px]">
            Show{" "}
            <select className="text-white rounded-[2px] bg-[#1c2033]">
              <option> 10 </option>
            </select>{" "}
            entries
          </div>
          <div className="w-[370px] bg-[#1D2032] h-[35px] rounded-[8px] overflow-hidden  text-[#fff] flex items-center px-[10px]">
            <input
              type="text"
              className="bg-[#1D2032] outline-none h-full w-full px-[10px] "
              placeholder="Search"
            />

            <SearchIcon className="text-[#424A70] hover:text-[#fff] duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="w-full h-[800px]">
        <table id="AvailableSurveys">
          <thead>
            <tr>
              <th>Survey Code</th>
              <th>Survey Name</th>
              <th>Points</th>
              <th>Participates</th>
            </tr>
          </thead>

          {surveyData.map((item, ind) => {
            return (
              <tbody key={ind}>
                <tr className="duration-500">
                  <td>#{item.SurveyCode}</td>
                  <td> {item.SurveyName}</td>
                  <td> {item.Points}</td>
                  <td>
                    <a href={item.link}> Participate</a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Analytics;
