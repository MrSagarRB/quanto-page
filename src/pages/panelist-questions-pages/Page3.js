import React from "react";
import RadioOptions from "../../components/questions/RadioOptions";
const Page3 = () => {
  let question8Options = [
    {
      title: "Bisexual",
    },
    {
      title: "Homosexual (gay)",
    },
    {
      title: "Heterosexual (straight)",
    },
    {
      title: "Other",
    },
    {
      title: "Prefer not to say",
    },
  ];

  let question9Options = [
    {
      title: "Widowed",
    },
    {
      title: "Divorced",
    },
    {
      title: "Separated",
    },
    {
      title: "Never Married",
    },
    {
      title: "Married",
    },
  ];

  let question10Options = [
    {
      title: "1",
    },
    {
      title: "2",
    },
    {
      title: "3",
    },
    {
      title: "4",
    },
    {
      title: "5",
    },
    {
      title: "6",
    },
    {
      title: "More than 6",
    },
  ];

  let question11Options = [
    {
      title: "Male",
    },
    {
      title: "Female",
    },
  ];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question8Options}
        quetionId="8"
        quetion={
          "8. Which of the following best describes your sexual orientation?"
        }
      />
      <RadioOptions
        data={question9Options}
        quetionId="9"
        quetion={
          "9. Are you now married, widowed, divorced, separated or never married?"
        }
      />
      <RadioOptions
        data={question10Options}
        quetionId="10"
        quetion={
          "10. How many people are living or staying at this address? INCLUDE everyone who is living or staying here for more than 2 months. INCLUDE yourself if you are living here for more than 2 months.INCLUDE anyone else staying here who does not have another place to stay, even if they are here for 2 months or less.DO NOT INCLUDE anyone who is living somewhere else for more than 2 months, such as a college student living away or someone in the Armed Forces on deployment."
        }
      />
      <RadioOptions
        data={question11Options}
        quetionId="11"
        quetion={"11. Have you ever served on active duty in the Armed Forces?"}
      />
    </div>
  );
};

export default Page3;
