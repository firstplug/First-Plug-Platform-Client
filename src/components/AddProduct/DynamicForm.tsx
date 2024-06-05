"use client";
import React, { useEffect } from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import { InputProductForm } from "./InputProductForm";
import { useFormContext, Controller } from "react-hook-form";
import { Atrribute, Key, Product } from "@/types";

export type Field = {
  name: Key;
  title: string;
  options: string[];
};

const DynamicForm = ({
  fields,
  handleAttributesChange,
  isUpdate,
  initialValues,
}: {
  fields: Field[];
  handleAttributesChange: (attributes: Atrribute[]) => void;
  isUpdate: boolean;
  initialValues: Product;
}) => {
  const {
    setValue,
    watch,
    control,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const attributes = initialValues?.attributes || [];
  const selectedCategory = watch("category");

  // useEffect(() => {
  //   const newAttributes = fields.map((field) =>
  //     AttributeModel.create({
  //       key: field.name,
  //       value: watch(field.name) || "",
  //     })
  //   );

  //   handleAttributesChange(newAttributes);
  // }, [fields, setValue, watch, handleAttributesChange]);

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

  const handleChange = (key, value) => {
    console.log({ key, value });
    const updatedAttributes: Atrribute[] = attributes.map((attr) =>
      attr.key === key ? { ...attr, value } : attr
    );
    console.log({ updatedAttributes });
    handleAttributesChange(updatedAttributes);
    clearErrors(`attributes.${key}`);
  };

  useEffect(() => {
    console.log({ fields, errors });
  }, [fields, errors]);

  return (
    <div
      className={`grid gap-4 ${
        isUpdate ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 lg:grid-cols-3"
      }`}
    >
      {selectedCategory === "Merchandising" && (
        <div className="w-full">
          <InputProductForm
            name="name"
            type="text"
            value={watch("name") as string}
            onChange={(e) => {
              setValue("name", e.target.value);
              clearErrors("name");
            }}
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
      )}
      {fields.map((field) => (
        <div key={field.name}>
          <Controller
            name={field.name}
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <DropdownInputProductForm
                  name={`attributes.${field.name}`}
                  options={field.options}
                  placeholder={field.title}
                  title={field.title}
                  selectedOption={value || ""}
                  onChange={(option) => {
                    onChange(option);
                    handleChange(field.name, option);
                    console.log(field.name, { errors });
                  }}
                  required="required"
                />
                <div className="min-h-[24px]">
                  {errors.attributes?.[field.name] && (
                    <p className="text-red-500">
                      {(errors.attributes[field.name] as any)?.message}
                    </p>
                  )}
                </div>
              </>
            )}
          />
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
