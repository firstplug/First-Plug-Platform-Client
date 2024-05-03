"use client";
import React from "react";
import { FormInput } from "@/components";

export const ComputerForm = function ({ handleInput, handleCategoryChange }) {
  const brandOptions = [
    "Apple",
    "Samsung",
    "Dell",
    "HP",
    "Lenovo",
    "Logitech",
    "Ledger",
    "Other",
  ];
  return (
    <>
      <FormInput
        options={brandOptions}
        placeholder="Brand"
        title="Brand"
        prop="brand"
        handleInput={handleInput}
        required="required"
        type="options"
      />
      <FormInput
        placeholder="Model"
        title="Model"
        type="options"
        prop="model"
        handleInput={handleInput}
        required="required"
      />
      <FormInput
        placeholder="Processor"
        title="Processor"
        type="options"
        prop="processor"
        handleInput={handleInput}
        required="required"
      />
      <FormInput
        placeholder="RAM"
        title="RAM"
        type="options"
        prop="ram"
        handleInput={handleInput}
        required="required"
      />
      <FormInput
        placeholder="Storage"
        title="Storage"
        type="options"
        prop="storage"
        handleInput={handleInput}
        required="required"
      />
    </>
  );
};
