import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

const TextField = () => {
  let [text, setText] = useState("What is your Name?");

  let [editable, setEditable] = useState(false);

  return (
    <div className="flex flex-col gap-[10px] border px-[20px] py-[30px] rounded-[8px]">
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
      <input
        type="text"
        placeholder="Enter Answer"
        className="border px-4 py-1"
      />
    </div>
  );
};

export default TextField;
