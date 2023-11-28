"use client";
import { SearchInput } from "@/common";
import { useEffect, useState } from "react";

interface FilterModalProps {
  array?: FilterItem[];
  className?: string;
}

interface FilterItem {
  id: string;
  name: string;
}

export const FitlerModal = function ({ array, className }: FilterModalProps) {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);
  const [filterTeams, setFilterTeams] = useState<string[]>([]);

  useEffect(() => {
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

  const handleSelectFilter = (team: string, index: number) => {
    handleCheckboxChange(index);
    setFilterTeams((prevState) => {
      const isSelected = prevState.some((selected) => selected === team);

      if (isSelected) {
        return prevState.filter((selected) => selected !== team);
      } else {
        return [...prevState, team];
      }
    });
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
          <div key={filter.id} className="flex items-center gap-2 ml-2 ">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={checkboxes[index]}
              onChange={() => handleSelectFilter(filter.name, index)}
            />
            <label>{filter.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
