"use client";
import { ReactNode, useState } from "react";
import { DropDownArrow } from "./Icons";

interface DropFilterProps {
  children?: ReactNode;
  contentText?: string;
}

export function DropFilter({ children, contentText }: DropFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-full h-full z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-sm px-3 flex items-center gap-3 font-medium rounded-md bg-white border active:bg-gray-100 w-full h-full  "
      >
        {contentText}
        {isOpen ? (
          <DropDownArrow
            className={"w-3 rotate-180 transition-all duration-300"}
          />
        ) : (
          <DropDownArrow
            className={"w-3 rotate-360 transition-all duration-300"}
          />
        )}
      </button>
      {isOpen && children}
    </div>
  );
}
