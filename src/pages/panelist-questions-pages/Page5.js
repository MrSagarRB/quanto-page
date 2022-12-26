import React from "react";
import RadioOptions from "../../components/questions/RadioOptions";

const Page5 = () => {
  let question14Options = [
    {
      title: "Working (paid employee)",
    },
    {
      title: "Working (self-employed)",
    },
    {
      title: "Not working (disabled)",
    },
    {
      title: "Not working (looking for work)",
    },
    {
      title: "Not working (temporary layoff from a job)",
    },
    {
      title: "Not working (retired)",
    },
    {
      title: "Not working (other)",
    },
    {
      title: "Prefer not to answer",
    },
  ];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question14Options}
        quetionId="14"
        quetion={
          "14. Which statement best describes your current employment status?"
        }
      />
    </div>
  );
};

export default Page5;
