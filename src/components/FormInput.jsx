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
  required,
  clear,
}) {
  // TODO: TIPAR ESTE ARCHIVO
  const input = useInput("", required, type === "options");
  useEffect(() => {
    if (clear) {
      input.clearInput();
    } else {
      const value = type === "options" ? input.selectedOption : input.value;

      handleInput(prop, value);
    }
  }, [input.value, input.selectedOption, clear]);
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
          value={type === "optiones" ? input.selectedOption : input.value}
          className={` w-full ${className}`}
          placeholder={placeholder}
          title={title}
          {...input}
        />
      )}
    </>
  );
}
