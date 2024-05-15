"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";

const DynamicForm = function ({ fields, handleInput }) {
  const [formState, setFormState] = React.useState({});

  const handleInputChange = (name, value) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
    handleInput(name, value);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {fields.map((field) => (
        <div key={field.name}>
          <DropdownInputProductForm
            options={field.options}
            placeholder={field.title}
            title={field.title}
            name={field.name}
            selectedOption={formState[field.name]}
            onChange={(option) => handleInputChange(field.name, option)}
            required="required"
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
