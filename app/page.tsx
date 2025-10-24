import React from "react";

export default function Home() {
  return (
    <div className=" w-full h-auto text-white flex flex-col items-center justify-start pt-25 gap-10 ">
      <div className="flex flex-col text-center items-center justify-center gap-5 px-55">
        <p className=" text-5xl font-bold leading-relaxed ">
          All your business expenses in one place
        </p>
        <p>
          Your one-stop finance empower platform. <br /> Manage all your
          business expenses with our supafast app.{" "}
        </p>
      </div>
      <div className=" grid grid-cols-2 items-center justify-center gap-5  ">
        <button className="bg-[#1A202C] text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
          Get a Free Demo
        </button>
        <button className="bg-[#1A202C] text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC]  transition">
          See Pricing
        </button>
      </div>
      <div className="flex items-center justify-center px-20 mb-20 ">
        <img src="/Dashboard.png" className=" rounded-xl " alt="dashboard" />
      </div>
    </div>
  );
}
