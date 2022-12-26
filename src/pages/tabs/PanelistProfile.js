import { async } from "@firebase/util";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { ContextProvider } from "../../Context";
import { db } from "../../firebase-config";
import Page1 from "../panelist-questions-pages/Page1";
import Page2 from "../panelist-questions-pages/Page2";
import Page3 from "../panelist-questions-pages/Page3";
import Page4 from "../panelist-questions-pages/Page4";
import Page5 from "../panelist-questions-pages/Page5";
import Page6 from "../panelist-questions-pages/Page6";
import Page7 from "../panelist-questions-pages/Page7";
import Page8 from "../panelist-questions-pages/Page8";
import Page9 from "../panelist-questions-pages/Page9";

const PanelistProfile = () => {
  let { index, setIndex, user, answers } = useContext(ContextProvider);

  let handelNextBtn = () => {
    index == 7 ? SubmitAnswers() : setIndex(index + 1);

    console.log(index);
    console.log(index == 7);
  };

  let SubmitAnswers = async () => {
    await setDoc(doc(db, "PanelistProfile", user.uid), answers, {
      merge: true,
    }).then(() => {
      alert("Submited");
      setIndex(index + 1);
    });
  };

  let questionsPages = [
    <Page1 />,
    <Page2 />,
    <Page3 />,
    <Page4 />,
    <Page5 />,
    <Page6 />,
    <Page7 />,
    <Page8 />,
    <Page9 />,
  ];

  return (
    <div className=" w-full flex flex-col justify-start items-start">
      <div className="  w-full rounded-[12px] flex flex-col justify-between">
        <div className=" ">{questionsPages[index]}</div>
        <div className=" mt-[20px] flex justify-end">
          <button
            onClick={() => {
              handelNextBtn();
            }}
            className={`${
              index === 8 && "hidden"
            } w-[150px] bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300`}
          >
            {index === 7 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PanelistProfile;
