import React from "react";

export default function SS01() {
  return (
    <div className=" flex flex-col items-center justify-center gap-15 px-25 py-15  ">
      <div className=" w-full flex  flex-col items-start justify-center">
        <p className=" text-[#7C5CFC] ">INCREASE PRODUCTIVITY</p>
        <p className=" text-3xl font-bold ">
          Reduce Time in Doing Manual Work <br />
          Managing Expenses{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 justify-between">
        <div className="flex flex-col gap-5 items-start justify-center">
          <div className="bg-gray-200 rounded-full font-semibold flex items-center justify-center gap-2 ">
            <button className=" py-3 px-4 rounded-full text-white bg-[#7C5CFC]  ">
              With Spend.ln
            </button>
            <button className=" py-3 px-4 rounded-full text-gray-500 ">
              Without Spend.ln
            </button>
          </div>
          <p className=" text-xl font-semibold mb-3 ">
            Track Business Expenses until its Milisecond
          </p>
          <div className=" flex items-center justify-center gap-3 ">
            <img src="/yes.svg" alt="" />
            <p>
              Analyze your business cost easily with group transaction thorugh
              tagging feature.
            </p>
          </div>
          <div className=" flex items-center justify-center gap-3 ">
            <img src="/yes.svg" alt="" />
            <p>
              Add more than one card for payment. Integrated with more than 50+
              payment method and support bulk payment.
            </p>
          </div>
          <div className=" flex items-center justify-center gap-3 ">
            <img src="/yes.svg" alt="" />
            <p>
              Arrange your business expenses by date, name, etc., with just one
              click.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <img src="/Success Stories.svg " className=" h-100 w-100 " alt="" />
        </div>
      </div>
    </div>
  );
}
