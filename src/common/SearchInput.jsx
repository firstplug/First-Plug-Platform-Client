import React from "react";
import { SearchIcon } from "./Icons";
export default function SearchInput({ placeholder, className }) {
  return (
    <div
      className={`flex  border border-grey gap-2 items-center py-2 px-3  rounded-lg  ${className}`}
    >
      <SearchIcon className={" text-grey font-bold  "} />
      <input
        placeholder={placeholder}
        className={`text-md font-normal leading-5  text-dark-grey border-none outline-none  `}
      />
    </div>
  );
}
