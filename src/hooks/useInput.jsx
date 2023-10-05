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
      return "La contraseña debe tener al menos 6 caracteres";
    }

    // Al menos una mayúscula, una minúscula y cualquier caracter alfanumérico
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (!regex.test(value)) {
      return "La contraseña debe contener al menos una mayúscula, una minúscula y un número.";
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

export default function useInput(itialValue, type) {
  const validateFunction = validator(type);
  const [value, setValue] = useState(itialValue);
  const [error, setError] = useState(null);
  const [touched, setTouched] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = () => {
    setTouched(true);

    if (validateFunction) {
      setError(validateFunction(value));
    }
  };

  const onFocus = () => {
    setTouched(false);
    setError(null);
  };
  return { value, error, touched, onChange, onBlur, onFocus };
}
