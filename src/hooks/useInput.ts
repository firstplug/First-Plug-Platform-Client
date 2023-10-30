"use client";
import { ChangeEvent, useState } from "react";

type ValidatorType = "required" | "password" | "email"

function validator(type: ValidatorType) {
  const emailValidator = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const passwordValidator = (value: string) => {
    if (value.length < 6) {
      return "The password must be at least 6 characters long.";
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regex.test(value)) {
      return "The password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return null;
  };

  const fullNameValidator = (value: string) => {
    console.log("ENTRA  LA VALIDACION!", { value });
    if (value.length < 1) {
      return "This field is required";
    }
    return null;
  };

  switch (type) {
    case "required": {
      return fullNameValidator;
    }
    case "password": {
      return passwordValidator;
    }
    case "email": {
      return emailValidator;
    }

    default:
      return null;
  }
}

interface InputState<T>{
  value: T;
  error: string | null;
  touched: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onFocus: () => void;
  handleOption: (option: T) => void;
  selectedOption: T;
  clearInput: () => void;
}

export default function useInput<T>(initialValue: T, type: ValidatorType, isOptionInput = false) : InputState<T> {
  const validateFunction = validator(type);
  const [value, setValue] = useState(initialValue);
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement> ) => {
    setValue(e.target.value as T);
  };
  const handleOption = (option: T) => {
    setSelectedOption(option);
  };

  const onBlur = () => {
    setTouched(true);

    if (validateFunction) {
      !isOptionInput
        ? setError(validateFunction(value as string))
        : setError(validateFunction(selectedOption as string));
    }
  };

  const onFocus = () => {
    setTouched(false);
    setError(null);
  };
  const clearInput = () => {
    setValue(initialValue);
    setSelectedOption(initialValue);
  };
  return {
    value,
    error,
    touched,
    onChange,
    onBlur,
    onFocus,
    handleOption,
    selectedOption,
    clearInput,
  };
}
