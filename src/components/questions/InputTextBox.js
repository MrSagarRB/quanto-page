import React, { useContext } from "react";
import { ContextProvider } from "../../Context";

const InputTextBox = ({ quetion, quetionId }) => {
  let { handelInputChange } = useContext(ContextProvider);
  return (
    <div className="flex flex-col gap-[10px]">
      <h3>{quetion}</h3>
      <div className="grid grid-cols-2">
        <input
          type="text"
          onChange={(e) => handelInputChange(e)}
          name={quetionId}
        />
        <div></div>
      </div>
    </div>
  );
};

export default InputTextBox;
