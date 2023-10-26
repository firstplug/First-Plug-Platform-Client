import DropdownInput from "@/common/DropdownInput";
import Input from "@/common/Input";
import useInput from "@/hooks/useInput";
import React, { useEffect } from "react";

export default function FormInput({
  title,
  placeholder,
  type,
  className = "",
  prop,
  handleInput,
  options = [],
}) {
  const input = useInput("", "required", type === "options");
  useEffect(() => {
    const value = type === "options" ? input.selectedOption : input.value;

    handleInput(prop, value);
  }, [input.value, input.selectedOption]);
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
          className={` w-full ${className}`}
          placeholder={placeholder}
          title={title}
          {...input}
        />
      )}
    </>
  );
}
