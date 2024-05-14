"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/common";
import { useController } from "react-hook-form";

interface DropdownInputProductFormProps {
  className?: string;
  title: string;
  placeholder?: string;
  options?: readonly string[];
  selectedOption?: string;
  onChange?: (option: string) => void;
  required?: string;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  error?: string;
  touched?: boolean;
  name: string;
  defaultValue?: string;
  value?: string;
}

export function DropdownInputProductForm({
  title,
  placeholder,
  options = [],
  selectedOption,
  onChange,
  className,
  error,
  touched,
  name,
}: DropdownInputProductFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(selectedOption);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    onChange && onChange(option);
    setSelectedValue(option);
    setIsOpen(false);
  };

  const {
    field: { value },
  } = useController({ name });

  return (
    <div className={`relative ${className || ""}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <div className="relative">
        <input
          type="text"
          value={selectedOption || value || selectedValue}
          placeholder={placeholder}
          readOnly
          onClick={toggleDropdown}
          className={`w-full h-14 py-2 pl-4 pr-12 rounded-xl border ${
            error ? "border-error" : ""
          } text-black p-4 font-sans focus:outline-none`}
          name={name}
        />
        {touched && error && (
          <p className="absolute ml-4 text-error text-sm top-0 right-0 mt-3 mr-3">
            {error}
          </p>
        )}
        <div onClick={toggleDropdown}>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            stroke={2}
            color="grey"
          />
        </div>

        <ul
          className={`absolute z-10 top-full left-0 w-full border border-gray-300 bg-white rounded-lg shadow-lg overflow-y-auto max-h-48 ${
            isOpen ? "block" : "hidden"
          }`}
        >
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
      </div>
    </div>
  );
}
