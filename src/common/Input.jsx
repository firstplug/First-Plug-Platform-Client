"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Input = ({ title, placeholder, type = "text", className }) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = showPassword ? "text" : type;

  return (
    <div className={"relative " + (className || "")}>
      <label className="block text-grey ml-2 font-sans">{title}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="w-full h-14 py-2 rounded-xl border text-grey p-4 outline-none font-sans"
      />

      {type === "password" && (
        <button
          type="button"
          className="absolute inset-y-0 right-5 top-5 flex items-center mr-2"
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
    </div>
  );
};

export default Input;
