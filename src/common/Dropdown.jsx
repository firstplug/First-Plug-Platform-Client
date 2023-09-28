"use client";
import { useState } from "react";

const Dropdown = ({ children, body, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center px-4 py-2 rounded-full ${
          isOpen ? "bg-light-grey" : "bg-white hover:bg-light-grey"
        } ${className || ""}`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-black">{body}</span>
          {/* despues cargar este icono en el archivo icons, y agregar className en un bugfix */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.7.29l7 7a1 1 0 01-1.4 1.42L10 5.42 3.7 11.71a1 1 0 01-1.4-1.42l7-7A1 1 0 0110 3z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {isOpen && children}
    </div>
  );
};

export default Dropdown;
