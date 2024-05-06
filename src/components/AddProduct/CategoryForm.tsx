"use Client";
import React, { use } from "react";
import { useEffect } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";

export const CategoryForm = function ({
  handleInput,
  handleCategoryChange,
  selectedCategory,
  finished,
}) {
  const categoryOptions = [
    "Merchandising",
    "Computer",
    "Monitor",
    "Audio",
    "Peripherals",
    "Other",
  ];

  //   useEffect(() => {
  //     console.log("Selected category:", selectedCategory);
  //   }, [selectedCategory]);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={categoryOptions}
            placeholder="Category"
            title="Category"
            selectedOption={selectedCategory}
            onChange={handleCategoryChange}
            required="required"
          />
          <div className="w-full lg:w-full">
            <InputProductForm
              placeholder="Product Name"
              title="Product Name"
              type="text"
              prop="name"
              handleInput={handleInput}
              required="required"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <InputProductForm
            placeholder="Adquisition Date"
            title="Adquisition Date"
            type="date"
            prop="adquisitionDate"
            handleInput={handleInput}
            required="required"
            className="w-full"
          />
          <InputProductForm
            placeholder="Serial Number"
            title="Serial Number"
            type="text"
            prop="serialNumber"
            handleInput={handleInput}
            required="required"
            className="w-full "
          />
          <InputProductForm
            placeholder="Assigned Email"
            title="Assigned Email"
            type="email"
            prop="assignedEmail"
            handleInput={handleInput}
            required="required"
            className="w-full "
          />
          <InputProductForm
            placeholder="Location"
            title="Location"
            type="text"
            prop="location"
            handleInput={handleInput}
            required="required"
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};
