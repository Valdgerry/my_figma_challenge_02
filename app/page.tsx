"use client";

import React from "react";
import Navbar from "./components/navbar";
import ToggleSwitch from "./components/toggleswitch";
import ProductivitySection from "./components/producivitysection";
import HeroSection from "./components/herosection";

export default function Home() {
  const handleToggle = (isActive: boolean) => {
    console.log(
      `Notifications sont maintenant : ${isActive ? "ACTIVÉES" : "DÉSACTIVÉES"}`
    );
  };
  // Mettre à jour l'état global ou enregistrer les préférences utilisateur

  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* === SECTION 1: HERO (SCROLLABLE CONTENT, FIXED BACKGROUND) === */}
      <HeroSection />

      {/* --- SECTION 2: BENEFITS --- */}
      <div className="w-full flex flex-col items-center py-20 bg-white text-gray-900">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8 px-4 sm:px-8">
          {/* 1. Title Column */}
          <div className="lg:col-span-1 flex flex-col items-start justify-start gap-4">
            <p className="text-sm font-semibold text-[#7C5CFC]">
              WHY USE SPEND.IN
            </p>
            <p className="text-3xl font-bold">
              Easy, Simple,
              <br />
              Affordable
            </p>
          </div>

          {/* 2. Description Column (Span 2 in your original grid) */}
          <div className="lg:col-span-2 pt-0 lg:pt-7 pl-0 lg:pl-8">
            <p className="text-sm text-[#596780]">
              Our platform helps your business in managing expenses. These are
              some of the reasons why you should use our platform in managing
              business finances.
            </p>
          </div>

          {/* 3. Empty Column (lg:col-span-1) - Implicitly handled by grid */}
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-7xl px-4 sm:px-8">
          <img
            src="/Benefit v1.svg"
            alt="Benefit 1"
            className="w-full h-auto max-w-xs mx-auto hover:translate-y-10 hover:shadow-md "
          />
          <img
            src="/Benefit v2.svg"
            alt="Benefit 2"
            className="w-full h-auto max-w-xs mx-auto"
          />
          <img
            src="/Benefit v3.svg"
            alt="Benefit 3"
            className="w-full h-auto max-w-xs mx-auto"
          />
        </div>
      </div>
      {/* --- SECTION 3: HOW IT WORKS --- */}
      <div className=" w-full flex flex-col bg-[#1A202C] h-screen items-center justify-center gap-15 text-white relative  overflow-hidden ">
        <div className="absolute h-[500px] w-[500px] top-[-150px] left-[-250px] bg-gradient-to-br from-[#434753] to-transparent filter blur-3xl z-0"></div>
        <div className="absolute h-[500px] w-[500px] bottom-[-150px] right-[-250px] bg-gradient-to-tl from-[#434753] to-transparent filter blur-3xl z-0"></div>

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
      {/* --- SECTION 4: SUCCESS STORIES --- */}
      <ProductivitySection />

      {/* --- SECTION 5: TESTIMONIALS --- */}
      <div className=" flex flex-col bg-[#1A202C] h-auto items-center justify-center gap-15 text-white pt-25 pb-5 relative overflow-hidden ">
        <div className="absolute h-[500px] w-[500px] top-[-150px] left-[-250px] bg-gradient-to-br from-[#434753] to-transparent filter blur-3xl z-[-10]"></div>
        <div className="absolute h-[500px] w-[500px] bottom-[-150px] right-[-250px] bg-gradient-to-tl from-[#434753] to-transparent filter blur-3xl z-0"></div>

        <div className="  flex flex-col items-center justify-center gap-3  ">
          <p className=" text-[#7C5CFC] ">WHAT THEY SAY</p>
          <p className=" text-3xl font-bold ">Our User Kind Words</p>
          <p className=" text-[14px] text-center mt-2 text-[#79818f] ">
            Here are some testimonials from our user after using Spend.In <br />{" "}
            to manage their business expenses.
          </p>
        </div>
        <div className="grid grid-cols-3 px-15 gap-15 text-[14px]  ">
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
                Never thought that with Spend.In managing my business expenses
                is so easy! Been using this platform for 3 months. Been using
                this platform for 3 months and still counting!
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
      {/* --- SECTION 6: PRICING PLANS --- */}
      <div className=" w-full h-auto flex flex-col gap-10 items-center justify-center text-[14px] pb-10 ">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className=" text-center text-4xl font-semibold pt-25  ">
            {" "}
            Ready to Get Started?{" "}
          </p>
          <p className=" text-center text-gray-500 text-[16px] ">
            Choose a plan that suits your business needs
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <ToggleSwitch
            initialState={true}
            onToggle={handleToggle}
            name="notifications"
          />
          <button className=" rounded-full px-3 py-1 bg-[#E7DEFE] ">
            {" "}
            Save 65%{" "}
          </button>
        </div>
        <div className=" grid grid-cols-3 gap-15 ">
          <img src="/Free Plan.svg" alt="" className=" h-[500px] " />
          <img src="/Pro Plan.svg" alt="" className=" h-[500px] " />
          <img src="/Ultimate Plan.svg" alt="" className=" h-[500px] " />
        </div>
      </div>
      {/* --- SECTION 7: CALL TO ACTION --- */}
      <div className=" w-full h-auto bg-[#1A202C]  flex items-center justify-center   ">
        <div className=" w-full grid grid-cols-2 items-center justify-center gap-20 ">
          <div className=" flex flex-col items-start justify-center text-start text-white gap-3 pl-35 py-25 ">
            <p className=" text-[#7C5CFC] ">DOWNLOAD NOW!</p>
            <p className=" text-4xl font-semibold ">
              Start Track Your Business <br /> Expenses Today
            </p>
            <p className=" text-gray-500  ">
              Are you ready to make your business more organized? <br />{" "}
              Download Spend.In now!
            </p>
            <button className="bg-gray-800 text-white mt-4 px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
              Get a Free Demo
            </button>
          </div>
          <div className=" pt-16 flex items-end justify-end ">
            <img src="/Content03.svg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <img src="/Footer.svg" alt="" />
      </div>
    </div>
  );
}
