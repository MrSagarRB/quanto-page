import React from "react";

const DeleteAccount = () => {
  return (
    <div className=" h-full px-[30px] pt-[20px] pb-[40px]">
      <p className="font-[600] text-[16px]">we’re sorry to see you go</p>
      <p className="text-[14px] font-[#AEAEAE] mt-[8px]">
        Just a quick reminder, delete your account means you’ll lose your earns
        reward points.
      </p>
      <p className="text-[14px] font-[600] text-[#AEAEAE] mt-[16px]">
        {" "}
        Available Reward Points - 4025
      </p>
      <p className="text-[#42BBFF] text-[12px]">
        You earn just 200 points then you have received cashback...!
      </p>
      <div className="text-[16px] flex gap-[16px] mt-[24px]">
        <button className="bg-[#42BBFF] py-[8px] px-[16px] w-[107px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300">
          Continue
        </button>
        <button className="border border-[#42BBFF] py-[8px] px-[16px] w-[107px] rounded-[8px]">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteAccount;
