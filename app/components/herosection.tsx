// HeroSection.tsx (ou le nom de votre composant)
"use client";
import Navbar from "./navbar";
import React, { useState, useEffect } from "react";

// Importez votre composant Navbar ici
// import Navbar from './Navbar';

// Définition des classes de base pour l'animation
const BASE_TRANSITION = "transition-all duration-1000 ease-out opacity-0";

interface SlideInProps {
  delay: number;
  from: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
}

// Composant Helper pour l'animation
const SlideIn: React.FC<SlideInProps> = ({ children, delay, from }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Déclenche l'animation après le délai spécifié
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer); // Nettoyage
  }, [delay]);

  let initialTranslate = "";
  switch (from) {
    case "top":
      initialTranslate = "-translate-y-10"; // Décalé vers le haut
      break;
    case "bottom":
      initialTranslate = "translate-y-10"; // Décalé vers le bas
      break;
    case "left":
      initialTranslate = "-translate-x-10"; // Décalé vers la gauche
      break;
    case "right":
      initialTranslate = "translate-x-10"; // Décalé vers la droite
      break;
    default:
      initialTranslate = "";
  }

  return (
    <div
      className={`${BASE_TRANSITION} ${initialTranslate} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  );
};

// --- Composant principal ---

const HeroSection = () => {
  let delay = 1; // Délai initial

  return (
    <div className="w-full h-screen bg-[#0D121F] overflow-hidden relative">
      {/* ... (Éléments décoratifs en arrière-plan inchangés) ... */}
      <div className="absolute h-[300px] w-[300px] top-[-150px] right-[-150px] border-[50px] border-[#191E2A] rounded-full"></div>
      <div className="absolute h-[300px] w-[300px] bottom-[-150px] left-[-150px] border-[50px] border-[#191E2A] rounded-full"></div>
      <div className="absolute h-[500px] w-[500px] top-[-250px] left-[-250px] bg-gradient-to-br from-[#191E2A] to-transparent filter blur-3xl z-0"></div>
      <div className="absolute h-[500px] w-[500px] bottom-[-250px] right-[-250px] bg-gradient-to-tl from-[#191E2A] to-transparent filter blur-3xl z-0"></div>

      {/* Section de Contenu (z-10, SCROLLABLE) */}
      <div className="absolute z-10 w-full h-full overflow-y-auto text-white flex flex-col items-center justify-start pb-40 gap-10">
        {/* 1. Navbar (Arrive du Haut) */}
        <SlideIn delay={(delay += 100)} from="top">
          <div className="w-full">
            <Navbar /> {/* Assurez-vous d'importer votre Navbar */}
          </div>
        </SlideIn>

        {/* 2. Titre et Sous-titre (Arrivent du Bas) */}
        <SlideIn delay={(delay += 100)} from="bottom">
          <div className="flex flex-col text-center items-center justify-center gap-5 px-4 md:px-52">
            <p className="text-4xl md:text-5xl font-bold leading-snug">
              All your business expenses in one place
            </p>
            <p className="text-sm md:text-base">
              Your one-stop finance empower platform. <br /> Manage all your
              business expenses with our supafast app.{" "}
            </p>
          </div>
        </SlideIn>

        {/* 3. Boutons (Arrivent du Bas avec délai) */}
        <SlideIn delay={(delay += 150)} from="bottom">
          <div className="grid grid-cols-2 items-center justify-center gap-5">
            <button className="bg-[#1A202C] text-white px-6 py-3 rounded-full hover:bg-[#7C5CFC] transition text-sm">
              Get a Free Demo
            </button>
            <button className="bg-[#1A202C] text-white px-6 py-3 rounded-full hover:bg-[#7C5CFC] transition text-sm">
              See Pricing
            </button>
          </div>
        </SlideIn>

        {/* 4. Image du Dashboard (Arrive du Bas avec plus de délai) */}
        <SlideIn delay={(delay += 200)} from="bottom">
          <div className="flex items-center justify-center px-4 md:px-20 mt-10">
            <img
              src="/Dashboard.png"
              className="rounded-xl shadow-2xl max-w-full h-auto"
              alt="dashboard"
            />
          </div>
        </SlideIn>
      </div>
    </div>
  );
};

export default HeroSection;
