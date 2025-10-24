"use client";

// ToggleSwitch.tsx
import React, { useState, ChangeEvent } from "react";

interface ToggleSwitchProps {
  initialState: boolean;

  onToggle: (newState: boolean) => void;
  name: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  initialState,
  onToggle,
  name,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newState = event.target.checked;
    setIsChecked(newState);
    onToggle(newState);
  };

  return (
    <label htmlFor={name} className="flex items-center cursor-pointer">
      <div className="relative">
        {/* 1. L'input natif est masqué mais utilisé pour la logique d'état */}
        <input
          type="checkbox"
          id={name}
          name={name}
          checked={isChecked}
          onChange={handleChange}
          className="peer hidden"
        />

        {/* 2. La piste (l'ovale horizontal) */}
        <div className="w-10 h-5 bg-gray-300 peer-checked:bg-blue-600 rounded-full shadow-inner transition-colors duration-200 ease-in-out"></div>

        {/* 3. La bascule (le cercle intérieur) */}
        <div
          className="absolute w-3.5 h-3.5 bg-white rounded-full shadow inset-y-0.5 left-1 transition-all duration-200 ease-in-out 
                    peer-checked:transform peer-checked:translate-x-full peer-checked:left-0.5"
        ></div>
      </div>
    </label>
  );
};

export default ToggleSwitch;
