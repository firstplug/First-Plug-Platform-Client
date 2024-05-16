"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";

const DynamicForm = function ({ fields, handleInput, productData }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {fields.map((field) => (
        <div key={field.name}>
          <DropdownInputProductForm
            name={field.name}
            options={field.options}
            placeholder={field.title}
            title={field.title}
            selectedOption={productData[field.name] || ""}
            onChange={(value) => {
              handleInput(field.name, value);
            }}
            required="required"
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
