"use client";

import { useState } from "react";

function validator(type) {
  const emailValidator = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.match(emailRegex)) {
      return "Enter a valid email address.";
    }
    return null;
  };

  const passwordValidator = (value) => {
    if (value.length < 6) {
      return "The password must be at least 6 characters long.";
    }

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regex.test(value)) {
      return "The password must contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return null;
  };

  const fullNameValidator = (value) => {
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

export default function useInput(initialValue, type, isOptionInput = false) {
  const validateFunction = validator(type);
  const [value, setValue] = useState(initialValue);
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handleOption = (option) => {
    setSelectedOption(option);
  };

  const onBlur = () => {
    setTouched(true);

    if (validateFunction) {
      !isOptionInput
        ? setError(validateFunction(value))
        : setError(validateFunction(selectedOption));
    }
  };

  const onFocus = () => {
    setTouched(false);
    setError(null);
  };
  const clearInput = () => {
    setValue("");
    setSelectedOption("");
  };
  return {
    value,
    error,
    touched,
    selectedOption,
    onChange,
    onBlur,
    onFocus,
    handleOption,
    clearInput,
  };
}
