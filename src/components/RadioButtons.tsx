"use client";
import { useState } from "react";

interface Options {
  id: number;
  name: string;
  jobPosition: string;
}

interface RadioButtonsProps {
  options: Options[];
  onSelectedChange: (option: Options) => void;
  className?: string;
}

export const RadioButtons = function ({
  options,
  onSelectedChange,
  className = "",
}: RadioButtonsProps) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = (opcion: Options) => {
    setSelectedOption(opcion);
    onSelectedChange(opcion);
  };

  return (
    <div className={`${className}`}>
      {options.map((opcion) => (
        <button
          className={`flex px-4 py-5 rounded-xl border border-border text-black ${
            selectedOption && selectedOption.id === opcion.id
              ? "bg-[#18489A14]"
              : null
          }`}
          key={opcion.id}
          onClick={() => handleClick(opcion)}
        >
          <div className="flex gap-4 font-inter">
            <h2 className="font-bold text-md">{opcion.name}</h2>

            <span className="font-bold text-md text-dark-grey">
              {opcion.jobPosition}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};
