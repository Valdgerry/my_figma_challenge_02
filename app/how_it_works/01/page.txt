import React from "react";

export default function HIW_01() {
  return (
    <div className=" flex flex-col bg-[#1A202C] h-screen items-center justify-center gap-15 text-white ">
      <div className=" flex flex-col items-center justify-center gap-3 ">
        <p className=" text-[#7C5CFC] ">HOW IT WORKS</p>
        <p className=" text-3xl font-bold ">Few Easy Steps and Done</p>
        <p className=" text-[14px] text-center mt-2 text-[#79818f] ">
          In just few easy step, you are all set to manage your business
          finances. <br /> Manage all expenses with Spend.In all in one place.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-25">
        <img
          src="/How it works v1.svg"
          className=" h-70 w-40 "
          alt=""
          loading="eager"
        />
        <img
          src="/How it works v2.svg"
          className=" h-70 w-40 "
          alt=""
          loading="eager"
        />
        <img
          src="/How it works v3.svg"
          className=" h-70 w-40 "
          alt=""
          loading="eager"
        />
      </div>
      <div className=" grid grid-cols-2 items-center justify-center gap-5  ">
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
          Get a Free Demo
        </button>
        <button className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC]  transition">
          See Pricing
        </button>
      </div>
    </div>
  );
}
