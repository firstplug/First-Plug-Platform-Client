"use Client";
import React, { useState } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { Location, CATEGORIES, Category } from "@/types";

interface CategoryFormProps {
  handleInput: (key: string, value: unknown) => void;
  handleCategoryChange: (category: Category | "") => void;
  selectedCategory: Category | "";
  setAssignedEmail: (email: string) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = function ({
  handleInput,
  handleCategoryChange,
  selectedCategory,
  setAssignedEmail,
}) {
  const { members } = useStore();

  const memberFullNames = ["None", ...members.memberFullName];

  const handleInputChange = (name: string, value: string) => {
    handleInput(name, value);
  };

  const [selectedFullName, setSelectedFullName] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const handleAssignedMemberChange = (selectedFullName: string) => {
    setSelectedFullName(selectedFullName);

    if (selectedFullName === "None" || selectedFullName === "") {
      setAssignedEmail("");
      handleInput("assignedEmail", "");
      setSelectedLocation("Our office");
      handleInput("location", "Our office");
      handleInput("status", "Available");
    } else {
      const selectedMember = members.members.find(
        (member) =>
          `${member.firstName} ${member.lastName}` === selectedFullName
      );
      setAssignedEmail(selectedMember?.email || "");
      handleInput("assignedEmail", selectedMember?.email || "");
      setSelectedLocation("Employee");
      handleInput("location", "Employee");
      handleInput("status", "Delivered");
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        <DropdownInputProductForm
          options={CATEGORIES}
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
            name="name"
            onChange={(e) => handleInputChange("name", e.target.value)}
            required="required"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <InputProductForm
          placeholder="Acquisition Date"
          title="Acquisition Date"
          type="date"
          name="acquisitionDate"
          onChange={(e) =>
            handleInputChange(
              "acquisitionDate",
              new Date(e.target.value).toISOString()
            )
          }
          className="w-full"
        />
        <InputProductForm
          placeholder="Serial Number"
          title="Serial Number"
          type="text"
          name="serialNumber"
          onChange={(e) => handleInputChange("serialNumber", e.target.value)}
          className="w-full "
        />
        <DropdownInputProductForm
          options={memberFullNames}
          placeholder="Assigned Email"
          title="Assigned Member"
          name="assignedMember"
          onChange={handleAssignedMemberChange}
          required="required"
          className="w-full "
        />
        {selectedFullName === "None" || selectedFullName === "" ? (
          <DropdownInputProductForm
            options={["Our office", "FP office"]}
            placeholder="Location"
            title="Location"
            name="location"
            selectedOption={selectedLocation}
            onChange={(value: Location) => {
              setSelectedLocation(value);
              handleInput("location", value);
            }}
            required="required"
            className="w-full"
          />
        ) : (
          <InputProductForm
            placeholder="Location"
            title="Location"
            type="text"
            name="location"
            value="Employee"
            onChange={(e) => handleInputChange("location", e.target.value)}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default observer(CategoryForm);
