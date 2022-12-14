import React from "react";

const CheckOption = () => {
  return (
    <div>
      <p className="font-[600]">Select Language </p>
      <div className="flex flex-col gap-3 mt-2">
        <div>
          {" "}
          <input type="checkbox" /> English
        </div>
        <div>
          <input type="checkbox" /> Marathi{" "}
        </div>
        <div>
          <input type="checkbox" /> Hindi
        </div>
      </div>
    </div>
  );
};

export default CheckOption;
