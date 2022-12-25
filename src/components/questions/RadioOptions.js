import React, { useContext } from "react";
import { ContextProvider } from "../../Context";

const RadioOptions = ({ data, quetion, quetionId }) => {
  let { handelInputChange } = useContext(ContextProvider);
  return (
    <div className="flex flex-col gap-[10px] ">
      <h3 className="">{quetion}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-[10px]">
        {data.map((item, ind) => {
          return (
            <label
              htmlFor={ind + quetionId}
              className="cursor-pointer"
              key={ind}
            >
              <input
                onChange={(e) => handelInputChange(e)}
                type="radio"
                id={ind + quetionId}
                name={quetionId}
                value={item.title}
                className="radio-btn"
              />
              <div className="text1 options">
                <p> {item.title}</p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default RadioOptions;
