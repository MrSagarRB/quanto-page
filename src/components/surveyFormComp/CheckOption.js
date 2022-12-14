import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const CheckOption = () => {
  let [text, setText] = useState("Select Language ");
  let [editable, setEditable] = useState(false);
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
      <div className="flex flex-col gap-3 mt-2">
        <div>
          <input type="checkbox" /> English
        </div>
        <div>
          <input type="checkbox" /> Marathi
        </div>
        <div>
          <input type="checkbox" /> Hindi
        </div>
      </div>
    </div>
  );
};

export default CheckOption;
