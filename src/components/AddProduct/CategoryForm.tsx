"use Client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";

export const CategoryForm = function ({
  handleInput,
  handleCategoryChange,
  selectedCategory,
}) {
  const categoryOptions = [
    "Merchandising",
    "Computer",
    "Monitor",
    "Audio",
    "Peripherals",
    "Other",
  ];

  const handleInputChange = (name, value) => {
    handleInput(name, value);
    console.log("Product data to be sent:", name, value);
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={categoryOptions}
            placeholder="Category"
            title="Category"
            name="category"
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
              name="name"
              handleInput={handleInputChange}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required="required"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <InputProductForm
            placeholder="Adquisition Date"
            title="Adquisition Date"
            type="date"
            name="adquisitionDate"
            prop="adquisitionDate"
            handleInput={handleInputChange}
            onChange={(e) =>
              handleInputChange("adquisitionDate", e.target.value)
            }
            required="required"
            className="w-full"
          />
          <InputProductForm
            placeholder="Serial Number"
            title="Serial Number"
            type="text"
            name="serialNumber"
            prop="serialNumber"
            handleInput={handleInputChange}
            onChange={(e) => handleInputChange("serialNumber", e.target.value)}
            required="required"
            className="w-full "
          />
          <InputProductForm
            placeholder="Assigned Email"
            title="Assigned Email"
            type="email"
            name="assignedEmail"
            prop="assignedEmail"
            handleInput={handleInputChange}
            onChange={(e) => handleInputChange("assignedEmail", e.target.value)}
            required="required"
            className="w-full "
          />
          <InputProductForm
            placeholder="Location"
            title="Location"
            type="text"
            name="location"
            prop="location"
            handleInput={handleInputChange}
            onChange={(e) => handleInputChange("location", e.target.value)}
            required="required"
            className="w-full "
          />
        </div>
      </div>
    </>
  );
};
