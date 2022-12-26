import React from "react";

const Page9 = () => {
  return (
    <div className="quetion-container h-[500px] flex flex-col gap-[30px] overflow-y-scroll scroll-smooth w-full items-center justify-center bg-[#2E3757] rounded-[12px] p-[20px]">
      <div className=" w-[550px]  flex flex-col justify-center items-center">
        <p className="text-[36px] text-center">
          Thank you for taking this survey powered by Quanto
        </p>
        <button className="w-[150px] mt-[20px] bg-[#42BBFF] px-[16px] py-[8px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300">
          Done
        </button>
      </div>
    </div>
  );
};

export default Page9;
