import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-15 border-b-1 border-gray-800 text-sm text-white flex items-center justify-between  ">
      <img src="/Logo.svg" alt="Logo" />
      <ul className="flex items-center  space-x-7">
        <li>
          <a href="#" className="hover:underline">
            Products
          </a>
        </li>
        <li>
          <a href="/benefits/01" className="hover:underline">
            Benefit
          </a>
        </li>
        <li>
          <a href="/how_it_works/01" className="hover:underline">
            How it works
          </a>
        </li>
        <li>
          <a href="/success_stories" className="hover:underline">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Company
          </a>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-4  ">
        <button className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
          Log in
        </button>
        <button className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC]  transition">
          Get Demo
        </button>
      </div>
    </nav>
  );
}
