import React, {ReactNode } from "react";
import { NavButtonIcon } from "./Icons";

interface ButtonMyStockProps {
  body?: ReactNode;
  onClick?: () => void
}

export function ButtonMyStock({ body, onClick } : ButtonMyStockProps) {
  return (
    <div>
      {" "}
      <button
        className="px-4 py-2 text-sm font-medium text-gray-700 rounded-md bg-white flex items-center"
        onClick={onClick}
      >
        <p className="font-inter text-lg font-bold pr-2">{body}</p>
        <NavButtonIcon />
      </button>
    </div>
  );
}
