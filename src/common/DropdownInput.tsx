"use client";
import { useState, ReactEventHandler } from "react";
import Button from "./Button";
import { ChevronDown } from "./Icons";

interface DropdownInputProps  {
  className?: string;
  title: string;
  placeholder?: string;
  options?: string[];
  selectedOption?: string;
  handleOption?: (option: string) => void;
  onBlur?: ReactEventHandler;
  onFocus?: ReactEventHandler;
  error?: string;
  touched?: boolean;
  name?: string;
  defaultValue?: string;
  value?: string;
};

export default function DropdownInput({
  className,
  title,
  placeholder,
  options = [],
  selectedOption,
  handleOption,
  onBlur,
  onFocus,
  error,
  touched,
  name,
  defaultValue,
  value,
} : DropdownInputProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={` ${className || ""}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <div className="relative">
        <input
          placeholder={placeholder}
          onClick={toggleDropdown}
          onBlur={onBlur}
          onFocus={onFocus}
          value={selectedOption}
          defaultValue={selectedOption}
          className={`w-full  h-14 py-2 rounded-xl border ${
            error ? "border-error" : ""
          } text-black p-4  font-sans focus:outline-none`}
        />
        {touched && error ? (
          <p className=" ml-4  text-error text-sm  ">{error}</p>
        ) : null}
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
                onClick={() => {
                  handleOption(option);
                  handleOptionClick();
                }}
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
