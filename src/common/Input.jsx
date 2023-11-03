"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/common/Icons";

export default function Input({
  title,
  placeholder,
  type,
  defaultValue = "",
  className = "",
  value,
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div className={`relative   h-24  font-inter  ${className}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={inputType}
        placeholder={placeholder}
        defaultValue={value}
        className={`w-full  h-14 py-2 rounded-xl border ${
          error ? "border-error" : ""
        } text-black p-4  font-sans focus:outline-none`}
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-5 top-2  h-full flex items-center mr-2"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5 text-grey " />
          ) : (
            <EyeIcon className="h-5 w-5 text-grey " />
          )}
        </button>
      )}

      {touched && error ? (
        <p className=" ml-2  text-error text-sm  ">{error}</p>
      ) : null}
    </div>
  );
}
