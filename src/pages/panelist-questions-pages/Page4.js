import React, { useContext } from "react";
import RadioOptions from "../../components/questions/RadioOptions";

const Page4 = () => {
  let question12Options = [
    {
      title: "Yes",
    },
    {
      title: "No",
    },
  ];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question12Options}
        quetionId="13"
        quetion={"13. Are you now serving in the Armed Forces?"}
      />
    </div>
  );
};

export default Page4;
