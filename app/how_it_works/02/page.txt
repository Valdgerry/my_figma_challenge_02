import React from "react";

export default function HIW_02() {
  return (
    <div className="grid grid-cols-2 bg-[#1A202C] text-white h-screen  items-center justify-center gap-20 px-25 py-10">
      <div>
        <img src="/Content02.svg" alt="" />
      </div>
      <div className=" flex flex-col items-start justify-start">
        <p className=" text-[#7C5CFC] ">HOW IT WORKS</p>
        <p className=" text-3xl font-bold ">Few Easy Steps and Done</p>
        <p className=" text-[14px] mt-2 text-[#79818f] ">
          In just few easy step, you are all set to manage your business
          finances. <br /> Manage all expenses with Spend.In all in one place.
        </p>
        <div className=" w-full bg-gray-800  flex items-center justify-center rounded-2xl mt-10 ">
          <img src="/Stepper.svg" className=" h-70 w-120 " alt="" />
        </div>
      </div>
    </div>
  );
}
