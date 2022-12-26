import React from "react";
import RadioOptions from "../../components/questions/RadioOptions";

const Page8 = () => {
  let question17Options = [{ title: "Republican" }, { title: "Democratic" }];
  let question18Options = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
  ];
  let question19Options = [
    {
      title: "Republican",
    },
    {
      title: "Independent",
    },
    {
      title: "Democratic",
    },
    {
      title: "Other",
    },
    {
      title: "None",
    },
  ];

  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question17Options}
        quetionId="17"
        quetion={
          "17. Do you think of yourself as closer to the Republican or Democratic party?"
        }
      />
      <RadioOptions
        data={question18Options}
        quetionId="18"
        quetion={
          "18. Here is a 7-point scale on which the political views that people might hold are arranged from extremely liberal (left) to extremely conservative (right). Where would you place yourself on this scale?"
        }
      />
      <RadioOptions
        data={question19Options}
        quetionId="19"
        quetion={"19. What political party are you registered with, if any?"}
      />
    </div>
  );
};

export default Page8;
