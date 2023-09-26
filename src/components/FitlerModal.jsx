import SearchInput from "@/common/SearchInput";
import React from "react";

export default function FitlerModal({ array, className }) {
  return (
    <div
      className={` ${
        className || ""
      }absolute bg-white w-[20vw] p-4 border-2 rounded-md flex flex-col gap-2`}
    >
      <SearchInput />
      <div className="p-0 max-h-[7rem] overflow-y-auto flex flex-col gap-2">
        <div className="flex items-center gap-2 my-1">
          <input type="checkbox" className="w-5 h-5" name="" id="" />
          <label htmlFor="">Select All</label>
        </div>
        {array.map((filter) => (
          <div className="flex items-center gap-2 ml-2 ">
            <input type="checkbox" className="w-5 h-5" name="" id="" />

            <label htmlFor="">{filter}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
