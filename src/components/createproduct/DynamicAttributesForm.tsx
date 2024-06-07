"use client";
import React, { useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { DropdownInputProductForm } from "../AddProduct/DropDownProductForm";
import { Category, Key } from "@/types";
import { InputProductForm } from "../AddProduct/InputProductForm";

interface DynamicAttributesFormProps {
  category: Category;
  fields: { name: string; title: string; options: string[] }[];
  onAttributesChange: (attributes: { key: Key; value: string }[]) => void;
}

const DynamicAttributesForm: React.FC<DynamicAttributesFormProps> = ({
  category,
  fields,
  onAttributesChange,
}) => {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const name = watch("name");

  useEffect(() => {
    const newAttributes = fields.map((field, index) => ({
      key: field.name as Key,
      value: watch(`attributes.${index}.value`) || "",
    }));
    onAttributesChange(newAttributes);
  }, [fields, watch, onAttributesChange]);

  const handleChange = () => {
    const attributes = fields.map((field, index) => {
      const value = watch(`attributes.${index}.value`, "");
      return { key: field.name as Key, value };
    });
    onAttributesChange(attributes);
  };

  return (
    <div>
      {category === "Merchandising" && (
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <div>
                <InputProductForm
                  title="Product Name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    field.onChange(e);
                    handleChange();
                  }}
                  placeholder="Product Name"
                />
                {errors.name && (
                  <span className="text-red-500">
                    {errors.name.message as any}
                  </span>
                )}
              </div>
            )}
          />
        </div>
      )}
      {fields.map((field) => (
        <Controller
          key={field.name}
          name={`attributes.${field.name}.value`}
          control={control}
          render={({ field: controllerField }) => (
            <div>
              <DropdownInputProductForm
                title={field.title}
                name={`attributes.${field.name}.value`}
                options={field.options}
                selectedOption={controllerField.value}
                onChange={(value) => {
                  controllerField.onChange(value);
                  handleChange();
                }}
              />
              {errors.message && errors.attributes[0][field.name].message && (
                <span className="text-red-500">
                  {errors.attributes[0][field.name].message as any}
                </span>
              )}
            </div>
          )}
        />
      ))}
    </div>
  );
};

export default DynamicAttributesForm;
