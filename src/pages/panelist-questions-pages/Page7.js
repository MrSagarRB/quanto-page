import React from "react";
import RadioOptions from "../../components/questions/RadioOptions";

const Page7 = () => {
  let question16Options = [
    {
      title: "Republican",
    },
    {
      title: "Democrat",
    },
    {
      title: "Independent",
    },
    {
      title: "Other",
    },
    {
      title: "No preference",
    },
  ];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question16Options}
        quetionId="16"
        quetion={
          "16. Generally speaking, do you usually think of yourself as a Republican, a Democrat, an Independent, or something else?"
        }
      />
    </div>
  );
};

export default Page7;
