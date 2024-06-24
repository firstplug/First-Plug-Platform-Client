"use client";
import React from "react";

interface InputProps {
  title: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  // required?: string;
  allowFutureDates?: boolean;
  disabled?: boolean;
}

export function InputProductForm({
  title,
  placeholder,
  type = "text",
  className = "",
  value = "",
  onChange,
  name,
  allowFutureDates = true,
  disabled = false,
}: InputProps) {
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e);
  };

  const today = new Date().toISOString().split("T")[0];

  const formattedToday = (date: string) => {
    const hoy = new Date(date);
    const yyyy = hoy.getFullYear();
    const mm = String(hoy.getMonth() + 1).padStart(2, "0"); // Meses empiezan desde 0
    const dd = String(hoy.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <div className={`relative ${className}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <input
        name={name}
        type={type}
        value={type === "date" ? formattedToday(value) : value}
        onChange={(e) => {
          onChange(e);
          if (type === "date") {
            handleDateChange(e);
          } else {
            onChange && onChange(e);
          }
        }}
        placeholder={placeholder}
        className={`w-full h-14 py-2 rounded-xl border text-black p-4 font-sans focus:outline-none ${className}`}
        max={type === "date" && !allowFutureDates ? today : undefined}
        disabled={disabled}
      />
    </div>
  );
}
