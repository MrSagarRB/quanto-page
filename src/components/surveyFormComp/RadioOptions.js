import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import AddIcon from "@mui/icons-material/Add";

const RadioOptions = () => {
  let [text, setText] = useState("Select Gender");
  let [editable, setEditable] = useState(false);

  let [radioBtn, setRadioBtn] = useState([
    {
      label: "Male",
      editable: false,
    },
    {
      label: "Female",
      editable: false,
    },
  ]);

  let handelEditable = () => {
    setRadioBtn([...radioBtn, { editable: true }]);
    console.log(radioBtn);
  };

  return (
    <div className="flex  flex-col gap-[10px] border px-[20px] py-[30px] rounded-[8px]">
      {editable ? (
        <div className="flex gap-[5px]">
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
        <h1
          onClick={() => {
            setEditable(true);
          }}
          className="font-[600]"
        >
          {text}
        </h1>
      )}

      <div className="flex gap-4">
        {radioBtn.map((item, ind) => {
          return (
            <div className="flex gap-3" key={ind}>
              <input
                type="radio"
                id={item.label}
                name="group"
                className="cursor-pointer customRadio"
              />

              <label htmlFor={item.label} className="cursor-pointer">
                {item.editable ? (
                  <div className="flex gap-[5px]">
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
                  <p>{item.label}</p>
                )}
              </label>
            </div>
          );
        })}
        <div
          onClick={() =>
            setRadioBtn([...radioBtn, { label: "Type", editable: false }])
          }
          className="opacity-5 hover:opacity-80 cursor-pointer"
        >
          <AddIcon />
        </div>

        {/* <div className="flex gap-3">
          <input type="radio" />
          <label>Female</label>
        </div> */}
      </div>
    </div>
  );
};

export default RadioOptions;
