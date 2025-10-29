// components/Navbar.tsx
"use client"; // 👈 Indique qu'il s'agit d'un composant client

import React from "react";
import Link from "next/link"; // 👈 Importation du composant Link

export default function Navbar() {
  // Tableau pour définir les liens et leurs ancres (IDs)
  const navItems = [
    { name: "Products", href: "#products" },
    // 💡 J'utilise les IDs que nous avons définis précédemment :
    { name: "Benefit", href: "#benefits" },
    { name: "How it works", href: "#howitworks" },
    { name: "Pricing", href: "#pricing" },
    { name: "Company", href: "#company" },
  ];

  return (
    <nav className="w-full h-16 px-15 border-b-1 border-gray-800 text-sm text-white flex items-center justify-between ">
      <img src="/Logo.svg" alt="Logo" />

      {/* Remplacement des <a> par des <Link> */}
      <ul className="flex items-center space-x-7">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href} // Utilisation de l'ancre #id
              className="hover:underline transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center gap-4">
        <button className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
          Log in
        </button>
        <button className="bg-transparent text-white px-4 py-2 rounded-full hover:bg-[#7C5CFC] transition">
          Get Demo
        </button>
      </div>
    </nav>
  );
}
