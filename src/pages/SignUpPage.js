import React from "react";

const SignUpPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center  ">
      <div className="   w-[500px] mt-[100px]  pb-[100px]  flex flex-col items-center">
        <p className="text-[32px] font-[600] text-[#111]">
          Sign in to Mirats Quanto
        </p>
        <div className=" w-full flex flex-col gap-[40px]">
          <div className="w-full    flex flex-col gap-[15px]  mt-[20px] ">
            <div className="flex gap-[20px]">
              <input
                type="text"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full px-[10px] py-[15px] outline-none   rounded-[8px] border"
                placeholder="Last Name"
              />
            </div>
            <div>
              <p className="mb-[5px]"> COUNTRY / REGION</p>
              <select className="w-full px-[10px] py-[15px] outline-none   rounded-[8px] border ">
                <option> India</option>
              </select>
            </div>

            <div>
              <input
                type="date"
                className="w-full px-[10px] py-[15px] outline-none   rounded-[8px] border"
              />
            </div>
          </div>
          {/*  */}
          <div className="w-full   flex flex-col gap-[15px]   ">
            <div className="">
              <input
                type="email"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="abc@xyz.com"
              />
            </div>
            <div>
              <p className="mb-[5px]"> This will be your new Apple ID.</p>
              <input
                type="email"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="password"
              />
            </div>
            <div className="">
              <input
                type="email"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          {/*  */}
          <div className="w-full flex flex-col gap-[15px]  ">
            <div>
              <input
                type="text"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="Mobile Number"
              />
            </div>
            <div className="flex gap-[15px]">
              <input
                type="email"
                className="w-full px-[10px] py-[15px] outline-none rounded-[8px]  border"
                placeholder="Confirm Password"
              />
            </div>
            <div>
              {" "}
              <p className="text-[14px] text-[#666]">
                Make sure you enter a phone number you can always access. It
                will be used to verify your identity any time you sign in on a
                new device or web browser. Messaging or data rates may apply.
              </p>
            </div>
          </div>

          {/*  */}
          <div className=" flex justify-center">
            <button className="bg-[#0070c9] text-[#fff] px-[20px] py-2 rounded-[4px] hover:bg-[#80b6e2] duration-300">
              {" "}
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
