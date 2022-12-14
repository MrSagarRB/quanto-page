import { Button } from "@mui/material";
import React, { useState } from "react";
import CheckOption from "../../components/surveyFormComp/CheckOption";
import RadioOptions from "../../components/surveyFormComp/RadioOptions";
import TextFiled from "../../components/surveyFormComp/TextFiled";

const CreateSuery = () => {
  let elementData = [
    {
      name: "Simple Text Fild",
      element: <TextFiled />,
    },
    {
      name: "Radio Option",
      element: <RadioOptions />,
    },
    {
      name: "Check Option",
      element: <CheckOption />,
    },
  ];

  let [element, setElement] = useState([]);

  let [index, setIndex] = useState(null);

  let handelAddElement = () => {
    setElement((oldItem) => {
      return [...oldItem, elementData[index].element];
    });
  };

  console.log(index);

  return (
    <div className="h-screen w-full flex  px-[100px] py-[50px] test">
      <div className="w-[50%] h-full border flex flex-col  items-center  justify-center ">
        <div className=" flex flex-col gap-[20px]">
          <select
            onChange={(e) => setIndex(e.target.value)}
            className="border px-4 py-1"
          >
            <option>Select</option>
            {elementData.map((item, ind) => {
              return <option value={ind}>{item.name}</option>;
            })}
          </select>{" "}
          <Button
            disabled={!index}
            onClick={() => {
              handelAddElement();
            }}
          >
            Add Element
          </Button>
        </div>
      </div>
      <div className="w-[50%] h-full border flex flex-col   p-[30px]  gap-[30px] ">
        <h1 className="text-[32px]">Survey 00223</h1>
        {element.map((item, ind) => {
          return <div key={ind}>{item} </div>;
        })}
      </div>
    </div>
  );
};

export default CreateSuery;
