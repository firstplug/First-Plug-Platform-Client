"use client";
import React from "react";
import {
  Controller,
  FormProvider,
  UseFormReturn,
  useFormContext,
} from "react-hook-form";

interface InputProductFormProps {
  title: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prop?: string;
  handleInput?: (prop: string, value: unknown) => void;
  required?: string;
  name?: string;
  control?: UseFormReturn["control"];
}

export function InputProductForm({
  title,
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
  name,
  control,
}: InputProductFormProps) {
  // const methods = useFormContext();
  return (
    <div className={`relative ${className}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            value={value}
            onChange={(e) => {
              field.onChange(e);
              onChange && onChange(e);
            }}
            placeholder={placeholder}
            className={`w-full h-14 py-2 rounded-xl border text-black p-4 font-sans focus:outline-none ${className}`}
          />
        )}
      />
    </div>
  );
}
