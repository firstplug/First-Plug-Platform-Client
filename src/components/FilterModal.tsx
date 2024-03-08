"use client";
import { SearchInput } from "@/common";
import { useState } from "react";

interface FilterModalProps {
  items: FilterItem[];
}

interface FilterItem {
  id: string;
  name: string;
}

export const FilterModal = function ({ items }: FilterModalProps) {
  const [appliedFilters, setAppliedFilters] = useState<FilterItem[]>([]);
  const [checkboxes, setCheckboxes] = useState<boolean[]>([]);
  const allChecked = checkboxes.every(Boolean);

  const handleSelectAll = () => {
    setCheckboxes(Array(items.length).fill(!allChecked));
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    setCheckboxes(newCheckboxes);
  };

  const handleSelectFilter = (filter: FilterItem, index: number) => {
    handleCheckboxChange(index);
    setAppliedFilters((prevState) => {
      const isSelected = prevState.some(
        (appliedFilter) => appliedFilter.id === filter.id
      );

      if (!isSelected) return [...prevState, filter];

      return prevState.filter(
        (appliedFilter) => appliedFilter.id !== filter.id
      );
    });

    //TODO: implement function to 'send' filters to  correspondent componenet ==> onFilterChange(filters)
  };

  return (
    <div className="absolute bg-white w-[20vw] p-4 border-2 rounded-md flex flex-col gap-2">
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
        {items.map((filter, index) => (
          <div key={filter.id} className="flex items-center gap-2 ml-2 ">
            <input
              type="checkbox"
              className="w-5 h-5"
              checked={checkboxes[index]}
              onChange={() => handleSelectFilter(filter, index)}
            />
            <label>{filter.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
