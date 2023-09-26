"use client";
import SearchInput from "@/common/SearchInput";
import React, { useEffect, useState } from "react";

export default function FitlerModal({ array, className }) {
  const [allChecked, setAllChecked] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);

  useEffect(() => {
    // Initialize the state for checkboxes based on the array length
    setCheckboxes(Array(array.length).fill(false));
  }, [array]);

  const handleSelectAll = () => {
    setAllChecked(!allChecked);
    setCheckboxes(Array(array.length).fill(!allChecked));
  };

  const handleCheckboxChange = (index) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
    setAllChecked(newCheckboxes.every((isChecked) => isChecked));
  };
  return (
    <div
      className={` ${
        className || ""
      }absolute bg-white w-[20vw] p-4 border-2 rounded-md flex flex-col gap-2`}
    >
      <SearchInput />
      <div className="p-0 max-h-[7rem] overflow-y-auto flex flex-col gap-2">
        <div className="flex items-center gap-2 my-1">
          <input
            type="checkbox"
            className="w-5 h-5"
            onClick={handleSelectAll}
          />
          <label>Select All</label>
        </div>
        {array.map((filter, index) => (
          <div className="flex items-center gap-2 ml-2 ">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={checkboxes[index]}
              onChange={() => handleCheckboxChange(index)}
            />

            <label>{filter}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
