import React from "react";
import { SearchIcon } from "./Icons";
export default function SearchInput({ icon, placeholder, className }) {
  return (
    <div className="flex self-stretch border border-grey gap-2 items-center py-2 px-3  rounded-lg ">
      <SearchIcon className={" text-grey font-bold "} />
      <input
        placeholder={placeholder}
        className={`text-md font-normal leading-5 rounded-md  text-dark-grey border-none outline-none ${className} `}
      />
    </div>
  );
}
