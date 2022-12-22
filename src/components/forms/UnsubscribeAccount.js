import React from "react";

const UnsubscribeAccount = () => {
  return (
    <div className=" h-full px-[30px] pt-[20px] pb-[40px] ">
      <div className="text-[#AEAEAE] text-[14px]">
        <p>
          If you’d like to stop receiving survey invites altogether, you will
          need to unsubscribe from the YouGov panel, which you can do on your
          account page.
        </p>
        <p className="mt-[8px]">
          For more detailed info visit our Privacy Policy.
        </p>
      </div>
      <button className="bg-[#42BBFF] w-full py-[8px] mt-[40px] rounded-[8px] hover:bg-transparent border border-[#42BBFF] duration-300">
        Unsubscribe
      </button>
    </div>
  );
};

export default UnsubscribeAccount;
