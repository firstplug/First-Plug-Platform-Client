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

  useEffect(() => {
    if (clear) {
      input.clearInput();
    } else {
      const value = type === "options" ? input.selectedOption : input.value;

      handleInput(prop, value);
    }
  }, [input.value, input.selectedOption, input.clearInput]);

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
