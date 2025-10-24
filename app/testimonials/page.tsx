import React from "react";

export default function Testimonials() {
  return (
    <div className=" flex flex-col bg-[#1A202C] h-screen items-center justify-center gap-15 text-white ">
      <div className=" flex flex-col items-center justify-center gap-3 ">
        <p className=" text-[#7C5CFC] ">WHAT THEY SAY</p>
        <p className=" text-3xl font-bold ">Our User Kind Words</p>
        <p className=" text-[14px] text-center mt-2 text-[#79818f] ">
          Here are some testimonials from our user after using Spend.In <br />{" "}
          to manage their business expenses.
        </p>
      </div>
      <div className="grid grid-cols-3 px-15 gap-15 text-[14px] ">
        <div className="bg-gray-800 flex flex-col p-8  rounded-xl ">
          <div className="flex flex-col gap-3 pb-7 border-b-1 border-gray-600">
            <p>It’s just incredible!</p>
            <p>
              It’s just 1 month since I’m using Spend.In to manage my business
              expenses, but the result is very satisfying! My business finance
              now more neat than before, thanks to Spend.In!
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 my-2 p-2">
            <img src="image 4.svg" className=" h-20 w-20 " alt="" />
            <div className="flex flex-col items-start justify-center">
              <p className=" font-semibold ">Jimmy Bartney</p>
              <p className="text-xs">Product Manager at Picko Lab</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 flex flex-col p-8  rounded-xl  ">
          <div className="flex flex-col gap-3 pb-7 border-b-1 border-gray-600">
            <p>Satisfied User Here!</p>
            <p>
              Never thought that with Spend.In managing my business expenses is
              so easy! Been using this platform for 3 months. Been using this
              platform for 3 months and still counting!
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 my-2 p-2">
            <img src="image 4.svg" className=" h-20 w-20 " alt="" />
            <div className="flex flex-col items-start justify-center">
              <p className=" font-semibold ">Natasha Romanoff</p>
              <p className="text-xs">Black Widow</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 flex flex-col p-5 rounded-xl  ">
          <div className="flex flex-col gap-3 pb-7 border-b-1 border-gray-600">
            <p>No doubt, Spend.In is the best!</p>
            <p>
              “The best”! That’s what I want to say to this platform, didn’t
              know that there’s a platform to help you manage your business
              expenses like this! Very recommended to you who have a big
              business!
            </p>
          </div>
          <div className="flex items-center justify-center gap-5 my-2 p-2">
            <img src="image 4.svg" className=" h-20 w-20 " alt="" />
            <div className="flex flex-col items-start justify-center">
              <p className=" font-semibold ">Moritika Kazuki</p>
              <p className="text-xs">Finance Manager at Mangan</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 items-center justify-center gap-5  ">
        <button className="bg-gray-800 text-white px-4 py-4 rounded-full hover:bg-[#7C5CFC] transition">
          <img src="/arrow-left.svg" alt="" />
        </button>
        <button className="bg-gray-800 text-white px-4 py-4 rounded-full hover:bg-[#7C5CFC]  transition">
          <img src="/arrow-right.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
