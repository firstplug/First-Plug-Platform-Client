"use client";
import React, { useState, useEffect } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { Location, CATEGORIES, Category } from "@/types";
import { FieldValues, useFormContext } from "react-hook-form";
import { set } from "zod";

interface CategoryFormProps {
  handleInput: (key: string, value: unknown) => void;
  handleCategoryChange: (category: Category | "") => void;
  selectedCategory: Category | "";
  setAssignedEmail: (email: string) => void;
  formState: Record<string, unknown>;
  clearErrors: (name?: keyof FieldValues | (keyof FieldValues)[]) => void;
  isUpdate?: boolean;
}

const CategoryForm: React.FC<CategoryFormProps> = function ({
  handleInput,
  handleCategoryChange,
  selectedCategory,
  setAssignedEmail,
  formState,
  clearErrors,
  isUpdate,
}) {
  const { members } = useStore();
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const [selectedFullName, setSelectedFullName] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  useEffect(() => {
    if (isUpdate) {
      const assignedEmail = formState.assignedEmail;
      if (assignedEmail) {
        const assignedMember = members.members.find(
          (member) => member.email === assignedEmail
        );
        setSelectedFullName(
          assignedMember
            ? `${assignedMember.firstName} ${assignedMember.lastName}`
            : "None"
        );
      } else {
        setSelectedFullName("None");
      }
      const location = formState.location;
      setSelectedLocation(location as string);
    }
  }, [isUpdate, formState, members.members]);

  const memberFullNames = ["None", ...members.memberFullName];
  const handleInputChange = (name: keyof FieldValues, value: string) => {
    handleInput(name, value);
    setValue(name, value);
    clearErrors(name);
  };

  const handleAssignedMemberChange = (selectedFullName: string) => {
    setSelectedFullName(selectedFullName);

    if (selectedFullName === "None" || selectedFullName === "") {
      setAssignedEmail("");
      handleInput("assignedEmail", "");
      setSelectedLocation("");
      handleInput("location", "");
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
    clearErrors("assignedEmail");
  };

  return (
    <div className="w-full">
      <div
        className={`grid gap-4 ${
          isUpdate ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 lg:grid-cols-2"
        }`}
      >
        <div className="w-full lg:w-full">
          <DropdownInputProductForm
            options={CATEGORIES}
            placeholder="Category"
            title="Category*"
            name="category"
            selectedOption={selectedCategory}
            onChange={(category: Category) => {
              handleCategoryChange(category);
              clearErrors("category");
            }}
            required="required"
          />
          <div className="min-h-[24px]">
            {errors.category && (
              <p className="text-red-500">{(errors.category as any).message}</p>
            )}
          </div>
        </div>

        <div className="w-full lg:w-full">
          <InputProductForm
            name="name"
            type="text"
            value={watch("name") as string}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Product Name"
            title="Product Name*"
            required="required"
          />
          <div className="min-h-[24px]">
            {errors.name && (
              <p className="text-red-500">{(errors.name as any)?.message}</p>
            )}
          </div>
        </div>
      </div>
      <div
        className={`grid gap-4 mt-4 ${
          isUpdate ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 lg:grid-cols-4"
        }`}
      >
        <div className="w-full">
          <InputProductForm
            placeholder="Acquisition Date"
            title="Acquisition Date"
            type="date"
            value={
              watch("acquisitionDate")
                ? (watch("acquisitionDate") as string).split("T")[0]
                : ""
            }
            name="acquisitionDate"
            onChange={(e) =>
              handleInputChange(
                "acquisitionDate",
                new Date(e.target.value).toISOString()
              )
            }
          />
        </div>
        <div className="w-full">
          <InputProductForm
            placeholder="Serial Number"
            title="Serial Number"
            type="text"
            value={watch("serialNumber") as string}
            name="serialNumber"
            onChange={(e) => handleInputChange("serialNumber", e.target.value)}
            className="w-full "
          />
        </div>

        <div className="w-full">
          <DropdownInputProductForm
            options={memberFullNames}
            placeholder="Assigned Email"
            title="Assigned Member*"
            name="assignedMember"
            selectedOption={selectedFullName}
            onChange={handleAssignedMemberChange}
            required="required"
            className="w-full "
          />
          <div className="min-h-[24px]">
            {errors.assignedEmail && (
              <p className="text-red-500">
                {(errors.assignedEmail as any).message}
              </p>
            )}
          </div>
        </div>

        <div className="w-full">
          {selectedFullName === "None" || selectedFullName === "" ? (
            <>
              <DropdownInputProductForm
                options={["Our office", "FP warehouse"]}
                placeholder="Location"
                title="Location*"
                name="location"
                selectedOption={selectedLocation}
                onChange={(value: Location) => {
                  setSelectedLocation(value);
                  handleInput("location", value);
                }}
                required="required"
                className="w-full"
              />
              <div className="min-h-[24px]">
                {errors.location && (
                  <p className="text-red-500">
                    {(errors.location as any).message}
                  </p>
                )}
              </div>
            </>
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
    </div>
  );
};

export default observer(CategoryForm);
