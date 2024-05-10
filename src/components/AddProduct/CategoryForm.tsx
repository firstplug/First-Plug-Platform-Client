"use Client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";

const CategoryForm = function ({
  handleInput,
  handleCategoryChange,
  selectedCategory,
}) {
  const { members } = useStore();

  const memberFullNames = ["None", ...members.memberFullName];

  const categoryOptions = [
    "Merchandising",
    "Computer",
    "Monitor",
    "Audio",
    "Peripherals",
    "Other",
  ];

  const handleInputChange = (name: string, value: string) => {
    handleInput(name, value);
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
          <DropdownInputProductForm
            options={memberFullNames}
            placeholder="Assigned Email"
            title="Assigned Member"
            name="assignedMember"
            onChange={(selectedFullName) => {
              const selectedMember = members.members.find(
                (member) =>
                  `${member.firstName} ${member.lastName}` === selectedFullName
              );
              handleInput("assignedEmail", selectedMember?.email || "");
            }}
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

export default observer(CategoryForm);
