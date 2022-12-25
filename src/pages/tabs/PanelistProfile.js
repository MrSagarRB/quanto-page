import React, { useState } from "react";
import Page1 from "../panelist-questions-pages/Page1";
import Page2 from "../panelist-questions-pages/Page2";
import Page3 from "../panelist-questions-pages/Page3";

const PanelistProfile = () => {
  let [index, setIndex] = useState(0);
  let questionsPages = [<Page1 />, <Page2 />, <Page3 />];

  return (
    <div className=" w-full flex flex-col justify-start items-start">
      <div className="  w-full rounded-[12px] flex flex-col justify-between">
        <div className=" ">{questionsPages[index]}</div>
        <div className=" mt-[20px] flex justify-end">
          <button
            disabled={questionsPages.length === index}
            onClick={() => {
              setIndex(index + 1);
            }}
            className="w-[150px] bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelistProfile;
