import React from "react";
import { SearchIcon } from "./Icons";
export default function SearchInput({ icon, placeholder, className }) {
  return (
    <div className="flex items-center">
      <SearchIcon className={"absolute text-grey font-bold"} />
      <input
        placeholder={placeholder}
        className={`w-96 px-7 py-2 rounded-xl border text-black  outline-gray-950-none${className}  `}
      />
    </div>
  );
}
