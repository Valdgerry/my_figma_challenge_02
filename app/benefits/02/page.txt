import React from "react";

export default function Benefits_02() {
  return (
    <div className=" flex flex-col items-center justify-center gap-15 mb-15 ">
      <div className=" flex flex-col items-center justify-center gap-3 ">
        <p className=" text-[#7C5CFC] ">WHY USE SPEND.IN</p>
        <p className=" text-3xl font-bold ">Easy, Simple, Affordable</p>
        <p className=" text-[14px] text-center mt-2 text-[#596780] ">
          Our platform helps your business in managing expenses. These are some
          of the <br /> reasons why you should use our platform in managing
          business finances.
        </p>
      </div>
      <div className="w-full px-25 grid grid-cols-2 items-center justify-center gap-10 ">
        <div className="grid grid-rows-3 items-center justify-center gap-5">
          <div className=" flex items-start justify-between gap-8  ">
            <img src="/Frame 33671.svg" className="mt-4" alt="" />
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-2xl font-semibold">
                Automatic Invoice Payments
              </p>
              <p className=" text-[#596780] text-[14px]">
                Automatic payments help you to arrange payments on a certain
                date without doing it manually again.Automatic payments help you
                to arrange payments on a certain date without doing it manually
                again.
              </p>
            </div>
          </div>
          <div className=" flex items-start justify-between gap-8  ">
            <img src="/Frame 33671.svg" className="mt-4" alt="" />
            <div className="flex flex-col gap-2 mt-3">
              <p className="text-2xl font-semibold">Clear Payment History</p>
              <p className=" text-[#596780] text-[14px]">
                Clear payment history helps you to track your business expenses
                on specific dates.
              </p>
            </div>
          </div>
          <div className=" flex items-start justify-between gap-8  ">
            <img src="/Frame 33671.svg" className="mt-4" alt="" />

            <div className="flex flex-col gap-2 mt-3">
              <p className="text-2xl font-semibold">
                Use of multi-card payments
              </p>
              <p className=" text-[#596780] text-[14px]">
                Have more than one debit or credit card? Don't worry, we support
                payments using more than one card.
              </p>
            </div>
          </div>
        </div>
        <img src="/Content.svg" alt="" />
      </div>
    </div>
  );
}
