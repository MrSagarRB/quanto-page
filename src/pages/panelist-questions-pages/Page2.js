import React from "react";
import CheckOption from "../../components/questions/CheckOption";
import InputTextBox from "../../components/questions/InputTextBox";
import RadioOptions from "../../components/questions/RadioOptions";

const Page2 = () => {
  let question4Options = [
    {
      title: "White",
    },
    {
      title: "Asian",
    },
    {
      title: "Black or African American",
    },
    {
      title: "Native Hawaiian or Pacific Islander",
    },
    {
      title: "American Indian or Alaska Native",
    },
    {
      title: "Other",
    },
  ];

  let question5Options = [
    {
      title: "Male",
    },
    {
      title: "Female",
    },
  ];

  let question6Options = [
    {
      title: "Less than $10,000",
    },
    {
      title: "$10,000 to $19,999",
    },
    {
      title: "$20,000 to $29,999",
    },
    {
      title: "$30,000 to $39,999",
    },
    {
      title: "$30,000 to $39,999",
    },
    {
      title: "$40,000 to $49,999",
    },
    {
      title: "$50,000 to $59,999",
    },
    {
      title: "$60,000 to $69,999",
    },
    {
      title: "$70,000 to $79,999",
    },
    {
      title: "$80,000 to $89,999",
    },
    {
      title: "$90,000 to $99,999",
    },
    {
      title: "$100,000 to $149,999",
    },
    {
      title: "$150,000 or more",
    },
  ];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <CheckOption
        data={question4Options}
        quetionId="4"
        quetion={
          "4. Choose one or more races that you consider yourself to be:"
        }
      />

      <RadioOptions
        data={question5Options}
        quetionId="5"
        quetion={"5. What is your sex?"}
      />

      <RadioOptions
        data={question6Options}
        quetionId="6"
        quetion={
          "6. Information about income is very important to understand. Would you please give your best guess? Please indicate the answer that includes your entire household income in (previous year) before taxes."
        }
      />
      <InputTextBox quetionId="7" quetion={"7. What is your ZIP code?"} />
    </div>
  );
};

export default Page2;
