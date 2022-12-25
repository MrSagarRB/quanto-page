import React, { useContext } from "react";
import { ContextProvider } from "../../Context";

const CheckOption = ({ data, quetion, quetionId }) => {
  let { handelInputChange, hanedlInputCheck } = useContext(ContextProvider);

  return (
    <div className="flex flex-col gap-[10px]">
      <h3>{quetion}</h3>
      <div className="grid grid-cols-2 gap-[10px]">
        {data.map((item, ind) => {
          return (
            <label
              htmlFor={ind + quetionId}
              className="cursor-pointer"
              key={ind}
            >
              <input
                onChange={(e) => hanedlInputCheck(e)}
                type="checkbox"
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
        {/* <div className="options">White</div> */}

        <input type="text" placeholder="type..." />
      </div>
    </div>
  );
};

export default CheckOption;
