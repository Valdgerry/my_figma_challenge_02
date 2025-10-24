import React from "react";

export default function Benefits_01() {
  return (
    <div className="  w-full h-screen flex flex-col items-center mt-17 justify-start gap-10 ">
      <div className="px-42  w-full grid grid-cols-4 gap-5">
        <div className="col-span-1 flex flex-col items-start justify-between">
          <p className=" text-[#7C5CFC] ">WHY USE SPEND.IN</p>
          <p className=" text-3xl font-bold ">
            Easy, Simple,
            <br />
            Affordable
          </p>
        </div>
        <div className="col-span-2 flex pt-7 pl-8 ">
          <p className=" text-[14px] text-[#596780] ">
            Our platform helps your business in managing <br /> expenses. These
            are some of the reasons why you <br /> should use our platform in
            managing business finances.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-15">
        <img src="/Benefit v1.svg" alt="" className="w-70 h-110" />
        <img src="/Benefit v2.svg" alt="" className="w-70 h-110" />
        <img src="/Benefit v3.svg" alt="" className="w-70 h-110" />
      </div>
    </div>
  );
}
