import React from "react";

const Header = () => {
  return (
    <div className="h-[60px] header-bg shadow-sm border-b px-[100px] flex items-center justify-between sticky top-0 ">
      <p className="text-[24px] font-[600]">Home app</p>{" "}
      <div className="flex gap-[40px]">
        <p>Overview</p>
        <p> Accessories</p>
      </div>
    </div>
  );
};

export default Header;
