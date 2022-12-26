import React from "react";
import RadioOptions from "../../components/questions/RadioOptions";

const Page6 = () => {
  let question15Options = [{ title: "Yes" }, { title: "No" }];
  return (
    <div className="quetion-container h-full flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full bg-[#2E3757] rounded-[12px] p-[20px]">
      <RadioOptions
        data={question15Options}
        quetionId="15"
        quetion={"15. Did you vote in the last election?"}
      />
    </div>
  );
};

export default Page6;
