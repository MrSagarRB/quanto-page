import React from "react";

const RadioOptions = () => {
  return (
    <div>
      <h1 className="font-[600]">Select gender</h1>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <input type="radio" />
          <label>Male</label>
        </div>
        <div className="flex gap-3">
          <input type="radio" />
          <label>Female</label>
        </div>
      </div>
    </div>
  );
};

export default RadioOptions;
