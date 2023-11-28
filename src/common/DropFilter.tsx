"use client";
import { ReactNode, useState } from "react";
import { DropDownArrow } from "./Icons";

interface DropFilterProps {
  children?: ReactNode;
  body?: string;
  className?: string;
}

export function DropFilter({ children, body, className }: DropFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="px-4 py-2  font-medium rounded-md bg-white border active:bg-gray-100 flex items-center gap-3"
      >
        Filter by Team:
        {isOpen ? (
          <DropDownArrow className={"rotate-180 transition-all duration-300"} />
        ) : (
          <DropDownArrow className={"rotate-360 transition-all duration-300"} />
        )}
      </button>
      {isOpen && children}
    </div>
  );
}
