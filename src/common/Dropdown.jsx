import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { NavButtonIcon } from "./Icons";

const DropdownButton = ({ name, email }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-white border active:bg-gray-100 flex items-center" // Agregamos la clase flex y items-center para centrar el icono y el texto
      >
        <NavButtonIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div className="text-sm text-gray-500 pl-4 pb-2 font-inter font-semibold mt-2">
              {name}
            </div>
            <div className="text-sm text-gray-500 pl-4 pb-4 font-inter font-medium mr-4">
              {email}
            </div>
            <button
              onClick={() =>
                signOut({ callbackUrl: "http://localhost:3000/login" })
              }
              type="button"
              className="block px-4 py-2 text-sm text-red-500 font-bold"
              role="menuitem"
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
