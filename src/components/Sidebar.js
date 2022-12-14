import React, { useState } from "react";

import { Squeeze as Hamburger } from "hamburger-react";

const Sidebar = ({ expand, setExpand, activeTab, setActiveTab, menuData }) => {
  console.log(expand);
  return (
    <div className="">
      <div
        onClick={() => {
          setExpand(!expand);
        }}
        className="h-[60px]  w-[200px]  overflow-hidden  flex items-center justify-start px-[10px] text-[#ADB3CC]  cursor-pointer"
      >
        <Hamburger toggled={expand} toggle={setExpand} />
        <p className="text-[24px] ml-[20px] text-[#42BBFF] tracking-widest">
          {" "}
          Q<span className="text-[#ffff]">uanto </span>
        </p>
      </div>
      <div className=" flex flex-col gap-[24px] text-[#ADB3CC] mt-[60px] px-[20px] ">
        {menuData.map((item, ind) => {
          return (
            <div className={` ${activeTab === ind && "tab"} `}>
              <div
                key={ind}
                onClick={() => {
                  setActiveTab(ind);
                }}
                className={`${
                  activeTab === ind && "text-[#42BBFF] "
                } flex items-center gap-[20px] w-[200px] overflow-hidden cursor-pointer duration-200 `}
              >
                <div className="hover:scale-110 duration-300">
                  {" "}
                  {item.icon}{" "}
                </div>
                <p className="text-[14px] ">{item.title}</p>{" "}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
