import React, { useContext } from "react";
import RadioOptions from "../../components/questions/RadioOptions";
import { ContextProvider } from "../../Context";
import Date from "../../components/questions/Date";

const Page1 = () => {
  let { handelInputChange } = useContext(ContextProvider);

  let question2Options = [
    {
      title: "Less than high school degree",
    },
    {
      title:
        "High school graduate (high school diploma or equivalent including GED)",
    },
    {
      title: "Some college but no degree",
    },
    {
      title: "Associate degree in college (2-year)",
    },
    {
      title: "Bachelor's degree in college (4-year)",
    },
    {
      title: "Master's degree",
    },
    {
      title: "Doctoral degree",
    },
    {
      title: "Professional degree (JD, MD)",
    },
  ];

  let question3Options = [
    {
      title: "Yes",
    },
    {
      title: "No",
    },
  ];

  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <Date quetion={"1. What is your year of birth?"} quetionId="3" />
      <RadioOptions
        data={question2Options}
        quetionId="2"
        quetion={
          "2. What is the highest level of school you have completed or the highest degree you have received?"
        }
      />
      <RadioOptions
        data={question3Options}
        quetionId="3"
        quetion={"3. Are you Spanish, Hispanic, or Latino or none of these?"}
      />
    </div>
  );
};

export default Page1;
