import { Button } from "@mui/material";
import React, { useState } from "react";
import CheckOption from "../../components/surveyFormComp/CheckOption";
import RadioOptions from "../../components/surveyFormComp/RadioOptions";
import TextField from "../../components/surveyFormComp/TextField";

const CreateSuery = () => {
  let elementData = [
    {
      name: "Simple Text TextField",
      element: <TextField />,
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

  console.log(element.length);

  return (
    <div className="h-screen w-full flex  px-[100px] py-[50px] test">
      <div className="w-[50%] h-full  flex flex-col  items-center  justify-center ">
        <div className=" flex flex-col gap-[20px]">
          <select
            onChange={(e) => setIndex(e.target.value)}
            className="border px-5 rounded-md py-3 "
          >
            <option>Select</option>
            {elementData.map((item, ind) => {
              return <option value={ind}>{item.name}</option>;
            })}
          </select>{" "}
          <Button
            disabled={!index}
            variant="contained"
            onClick={() => {
              handelAddElement();
            }}
          >
            Add Element
          </Button>
          <Button
            disabled={element.length == 0}
            variant="contained"
            color="success"
          >
            Saved
          </Button>
        </div>
      </div>
      <div className="w-[50%] h-full border flex flex-col p-[30px]  gap-[20px] rounded-[10px] shadow-lg ">
        <h1 className="text-[32px]">Survey 00223</h1>
        <div className=" h-[700px] flex flex-col gap-[30px] overflow-y-scroll">
          {element.map((item, ind) => {
            return <div key={ind}>{item} </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateSuery;
