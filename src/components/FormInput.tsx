"use client";
import { DropdownInput, Input } from "@/common";
import useInput from "@/hooks/useInput";
import React, { useEffect } from "react";

interface FormInputProps {
  title: string;
  placeholder: string;
  type: "text" | "number" | "password" | "options" | "date" | "email";
  className?: string;
  prop: string;
  handleInput: (prop: string, value: string) => void;
  options?: any[];
  required?: string;
  clear?: boolean;
}

export const FormInput = function ({
  title,
  placeholder,
  type,
  className = "",
  prop,
  handleInput,
  options = [],
  required,
  clear,
}: FormInputProps) {
  const input = useInput("", (required = "required"), type === "options");
  const { value, selectedOption, clearInput } = input

  useEffect(() => {
    if (clear) {
      clearInput();
    } else {
      const newValue = type === "options" ? selectedOption : value;
      handleInput(prop, newValue);
    }
  }, [value, selectedOption, clearInput, clear, handleInput, prop, type]);

  return (
    <>
      {type === "options" ? (
        <DropdownInput
          options={options}
          placeholder={placeholder}
          title={title}
          {...input}
        />
      ) : (
        <Input
          type={type}
          value={input.value}
          className={` w-full ${className}`}
          placeholder={placeholder}
          title={title}
          {...input}
        />
      )}
    </>
  );
};
