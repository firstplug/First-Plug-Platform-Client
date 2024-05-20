"use client";
import React, { useEffect, useState } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { useFormContext, Controller } from "react-hook-form";

const DynamicForm = ({ fields, handleAttributesChange }) => {
  const { setValue, watch, control } = useFormContext();
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    console.log("DynamicForm fields updated:", fields);
    const newAttributes = fields.map((field) => ({
      _id: "",
      key: field.name,
      value: watch(field.name) || "",
    }));
    setAttributes(newAttributes);
    handleAttributesChange(newAttributes);
  }, [fields, setValue, watch, handleAttributesChange]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {fields.map((field) => (
        <div key={field.name}>
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <DropdownInputProductForm
                name={field.name}
                options={field.options}
                placeholder={field.title}
                title={field.title}
                selectedOption={value || ""}
                onChange={(option) => {
                  onChange(option);
                  const updatedAttributes = attributes.map((attr) =>
                    attr.key === field.name ? { ...attr, value: option } : attr
                  );
                  setAttributes(updatedAttributes);
                  handleAttributesChange(updatedAttributes);
                }}
                required="required"
              />
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
