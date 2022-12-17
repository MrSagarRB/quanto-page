import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";

const CheckOption = () => {
  let [text, setText] = useState("Select Language ");
  let [editable, setEditable] = useState(false);

  let [checkOption, setCheckOption] = useState([
    {
      label: "English",
    },
    {
      label: "Marathi",
    },
    {
      label: "Hindi",
    },
  ]);
  return (
    <div className="flex w-full flex-col gap-[10px] border px-[20px] py-[30px] rounded-[8px]">
      {editable ? (
        <div className="flex gap-[5px]">
          {" "}
          <input
            className="outline-none"
            type="text"
            placeholder={text}
            onChange={(e) => {
              setText(e.target.value);
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
        <p
          onClick={() => {
            setEditable(true);
          }}
          className="font-[600]"
        >
          {text}
        </p>
      )}
      <div className="grid grid-cols-4 gap-3 mt-2">
        {checkOption.map((item, ind) => {
          return (
            <div key={ind} className="flex gap-2">
              <input type="checkbox" />
              <p> {item?.label}</p>
            </div>
          );
        })}
        <div
          onClick={() =>
            setCheckOption([...checkOption, { label: "Type", editable: false }])
          }
          className="opacity-5 hover:opacity-80 cursor-pointer"
        >
          <AddIcon />
        </div>
      </div>
    </div>
  );
};

export default CheckOption;
