// components/ProductivitySection.tsx
"use client";

import React, { useState } from "react";

// --- Définition des données pour les deux états ---

const DATA_WITH_SPEND = {
  title: "Track Business Expenses until its Milisecond",
  items: [
    {
      icon: "/yes.svg",
      text: "Analyze your business cost easily with group transaction thorugh tagging feature.",
    },
    {
      icon: "/yes.svg",
      text: "Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.",
    },
    {
      icon: "/yes.svg",
      text: "Arrange your business expenses by date, name, etc., with just one click.",
    },
  ],
  image: "/Success Stories.svg",
};

const DATA_WITHOUT_SPEND = {
  title:
    "Taking too long to tidy up administrative files makes it unproductive",
  items: [
    {
      icon: "/no.svg",
      text: "Complex recording process due to every administrative file in a different place.",
    },
    {
      icon: "/no.svg",
      text: "Need more effort to pay manually one by one invoice because there is no payment accommodation.",
    },
    {
      icon: "/no.svg",
      text: "Manual data arranging needs a long time because the different months/years are not in the same place.",
    },
  ],
  image: "/Success Stories02.svg",
};

// --- Composant React ---

const ProductivitySection: React.FC = () => {
  // true = With Spend.ln (état initial)
  // false = Without Spend.ln
  const [isWithSpend, setIsWithSpend] = useState<boolean>(true);

  // Sélectionne les données à afficher en fonction de l'état
  const currentData = isWithSpend ? DATA_WITH_SPEND : DATA_WITHOUT_SPEND;

  // Définit la position de l'indicateur violet
  // Si isWithSpend est true (gauche), translate-x-0.
  // Si isWithSpend est false (droite), translate-x-full.
  const indicatorPosition = isWithSpend ? "translate-x-0 " : "translate-x-full";

  return (
    <div className="flex flex-col items-center justify-center gap-15 px-25 py-15">
      {/* 1. Bloc Titre (Identique dans les deux états) */}
      <div className="w-full flex flex-col items-start justify-center">
        <p className="text-[#7C5CFC]">INCREASE PRODUCTIVITY</p>
        <p className="text-3xl font-bold">
          Reduce Time in Doing Manual Work <br />
          Managing Expenses{" "}
        </p>
      </div>

      {/* 2. Bloc Contenu (Boutons + Détails) */}
      <div className="grid grid-cols-2 gap-10 justify-between">
        {/* Colonne Gauche: Texte et Boutons */}
        <div className="flex flex-col gap-5 items-start justify-center">
          {/* 💥 NOUVEAU: Le conteneur des boutons est maintenant RELATIVE */}
          <div className="bg-gray-200 rounded-full font-semibold flex items-center justify-center gap-2 p-1 relative">
            {/* 1. L'Indicateur Animé (piste violette) */}
            <div
              className={`absolute top-0.5 bottom-0.5 w-1/2 rounded-full bg-[#7C5CFC] shadow-md transition-transform duration-300 ease-in-out left-1 ${indicatorPosition}`}
            ></div>

            {/* 2. Les Boutons (doivent être au-dessus de l'indicateur) */}
            <button
              onClick={() => setIsWithSpend(true)}
              className={`py-3 px-4 rounded-full w-1/2 relative z-10 transition-colors duration-300 ${
                isWithSpend ? "text-white" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              With Spend.ln
            </button>

            <button
              onClick={() => setIsWithSpend(false)}
              className={`py-3 px-4 rounded-full w-1/2 relative z-10 transition-colors duration-300 ${
                !isWithSpend
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Without Spend.ln
            </button>
          </div>

          {/* Contenu Dynamique */}
          <p className="text-xl font-semibold mb-3">
            {currentData.title} {/* Titre dynamique */}
          </p>

          {currentData.items.map((item, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <img src={item.icon} alt="" /> {/* Icône dynamique */}
              <p>{item.text}</p> {/* Texte dynamique */}
            </div>
          ))}
        </div>

        {/* Colonne Droite: Image */}
        <div className="w-full flex items-center justify-center">
          <img
            src={currentData.image} // Image dynamique
            className="h-100 w-100"
            alt="Success Stories Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductivitySection;
