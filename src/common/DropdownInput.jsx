"use client";
import { useState } from "react";
import Button from "./Button";
import { ChevronDown } from "./Icons";

export default function DropdownInput({
  className,
  title,
  placeholder,
  options = [],
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={` ${className || ""}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <div className="relative">
        <input
          placeholder={placeholder}
          className="w-full h-14 py-2 pr-12 rounded-xl border text-black p-4 outline-gray-950-none font-sans"
          onClick={toggleDropdown}
          readOnly
          value={selectedOption || ""}
        />
        <Button
          icon={<ChevronDown stroke={3} />}
          className="absolute right-5 top-0 bottom-0 m-auto"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <ul className="absolute z-10 mt-2 w-full border border-gray-300 bg-white rounded-lg shadow-lg">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="py-2 px-4 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
