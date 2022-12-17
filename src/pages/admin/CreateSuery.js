import { Button } from "@mui/material";
import React, { useState } from "react";
import CheckOption from "../../components/surveyFormComp/CheckOption";
import RadioOptions from "../../components/surveyFormComp/RadioOptions";
import TextField from "../../components/surveyFormComp/TextField";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DoneIcon from "@mui/icons-material/Done";

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

  let [formTitle, setFormTitle] = useState("Survey001");
  let [editable, setEditable] = useState(false);
  let [element, setElement] = useState([]);
  let [index, setIndex] = useState(null);

  let handelAddElement = () => {
    setElement((oldItem) => {
      return [...oldItem, elementData[index].element];
    });
  };

  let handelRemoveElement = (ind) => {
    setElement((item) => item.filter((i, index) => index !== ind));
  };

  console.log(element?.length);
  return (
    <div className="h-screen w-full flex  px-[100px] py-[50px]  ">
      <div className="w-[50%] h-full  flex flex-col  items-center  justify-center ">
        <div className=" flex flex-col gap-[20px]">
          <select
            onChange={(e) => setIndex(e.target.value)}
            className="border px-5 rounded-md py-3 "
          >
            {" "}
            {elementData?.map((item, ind) => {
              return <option value={ind}>{item.name}</option>;
            })}
          </select>
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
            disabled={element?.length == 0}
            variant="contained"
            color="success"
          >
            Saved
          </Button>
        </div>
      </div>
      <div className="w-[50%] h-full border flex flex-col p-[30px]  gap-[20px] rounded-[10px] shadow-lg ">
        {editable ? (
          <div className="flex gap-[5px]">
            {" "}
            <input
              className="outline-none"
              type="text"
              placeholder={formTitle}
              onChange={(e) => {
                setFormTitle(e.target.value);
              }}
            />
            <div
              onClick={() => {
                setEditable(false);
              }}
              className="cursor-pointer"
            >
              <DoneIcon className="text-[#F21010]" />
            </div>
          </div>
        ) : (
          <h1
            onClick={() => {
              setEditable(true);
            }}
            className="text-[32px]"
          >
            {formTitle}
          </h1>
        )}

        <div className=" h-[700px] flex flex-col gap-[30px] overflow-y-scroll ">
          {element?.map((item, ind) => {
            return (
              <div className="relative " key={ind}>
                {item}
                <div
                  onClick={() => {
                    handelRemoveElement(ind);
                  }}
                  className=" absolute top-[5px] right-[5px] text-red-500 opacity-10 cursor-pointer hover:opacity-80"
                >
                  <DeleteOutlineIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CreateSuery;
