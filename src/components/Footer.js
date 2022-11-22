import React from "react";

const Footer = () => {
  return (
    <div className="  px-[100px] pb-[20px]">
      <p className="pb-[10px]">
        More ways to shop:{" "}
        <span className="text-[#06c]"> Find a retailer </span> near you. Or call
        000800 040 1966.
      </p>
      <hr className="border" />
      <div className="flex justify-between pt-[10px]">
        <div className="flex">
          <p> Copyright © 2022 Apple Inc. All rights reserved.</p>
          <div className="flex gap-[20px] ml-[100px] ">
            <p> Privacy </p>
            <p>Policy </p>
            <p>Terms of Use </p>
            <p>Sales Policy </p>
            <p> Legal</p>
            <p>Site Map</p>
          </div>
        </div>
        <p> India</p>
      </div>
    </div>
  );
};

export default Footer;
