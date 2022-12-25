import React, { useContext } from "react";
import { ContextProvider } from "../../Context";

const Date = ({ quetion, quetionId }) => {
  let { handelInputChange } = useContext(ContextProvider);
  return (
    <div className="flex flex-col gap-[10px]">
      <h3>{quetion}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <input type="date" name="1" onChange={(e) => handelInputChange(e)} />
        <div></div>
      </div>
    </div>
  );
};

export default Date;
