"use client";
import React, { useEffect, useState } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { useFormContext, Controller } from "react-hook-form";

const DynamicForm = ({
  fields,
  handleAttributesChange,
  isUpdate,
  initialValues,
}) => {
  const { setValue, watch, control } = useFormContext();
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    const newAttributes = fields.map((field) => ({
      _id: "",
      key: field.name,
      value: watch(field.name) || "",
    }));
    setAttributes(newAttributes);
    handleAttributesChange(newAttributes);
  }, [fields, setValue, watch, handleAttributesChange]);

  useEffect(() => {
    if (isUpdate && initialValues) {
      fields.forEach((field) => {
        const value = initialValues.attributes.find(
          (attr) => attr.key === field.name
        )?.value;
        setValue(field.name, value);
      });
    }
  }, [isUpdate, initialValues, fields, setValue]);

  return (
    <div
      className={`grid gap-4 ${
        isUpdate ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 lg:grid-cols-3"
      }`}
    >
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
