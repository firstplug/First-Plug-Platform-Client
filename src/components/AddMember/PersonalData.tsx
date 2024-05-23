import React from "react";
import { useFormContext } from "react-hook-form";
import { InputProductForm } from "../AddProduct/InputProductForm";
import fields from "./JSON/memberData.json";

const PersonalData = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (name: string, value: string) => {
    register(name);
    watch(name);
  };

  // Group fields into rows of 3, with the first two rows being adjacent to the image
  const firstTwoRows = fields.slice(0, 6);
  const remainingFields = fields.slice(6);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4">
        {firstTwoRows.map((field, index) => (
          <div key={field.name} className={field.width}>
            <InputProductForm
              name={field.name}
              type={field.type}
              value={watch(field.name) as string}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder || field.title}
              title={field.title + (field.required ? "*" : "")}
              required={field.required}
            />
            {errors[field.name] && (
              <p className="text-red-500">
                {(errors[field.name] as any)?.message}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        {remainingFields.map((field) => (
          <div key={field.name} className={field.width}>
            <InputProductForm
              name={field.name}
              type={field.type}
              value={watch(field.name) as string}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              placeholder={field.placeholder || field.title}
              title={field.title + (field.required ? "*" : "")}
              required={field.required}
            />
            {errors[field.name] && (
              <p className="text-red-500">
                {(errors[field.name] as any)?.message}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalData;
