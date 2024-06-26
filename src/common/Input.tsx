"use client";
import { ChangeEvent, FocusEvent, useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/common/Icons";

type InputProps = {
  id: string;
  name: string;
  title: string;
  placeholder?: string;
  type?: string;
  defaultValue?: string;
  className?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  isLogin?: boolean;
  autocomplete?: string;
};

export function Input({
  id,
  name,
  title,
  placeholder,
  type,
  defaultValue,
  className,
  value = "",
  onChange,
  onBlur,
  onFocus,
  error,
  touched,
  required,
  isLogin = false,
  autocomplete,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div className={`relative   h-24  font-inter  ${className}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        type={inputType}
        placeholder={placeholder}
        // defaultValue={value}
        className={`w-full  h-14 py-2 rounded-xl border ${
          value.length && touched && error && !isLogin ? "border-error" : ""
        } text-black p-4  font-sans focus:outline-none`}
        required={required}
        autoComplete={autocomplete}
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

      {value.length && touched && error && !isLogin ? (
        <p className=" ml-2  w-[110%]  absolute  text-error text-sm  ">
          {error}
        </p>
      ) : null}
    </div>
  );
}
