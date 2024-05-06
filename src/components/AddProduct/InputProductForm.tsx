"use client";
import React from "react";
import { useState } from "react";

interface InputProductFormProps {
  title: string;
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prop?: string;
  handleInput?: (prop: string, value: unknown) => void;
  required?: string;
}

export function InputProductForm({
  title,
  placeholder,
  type = "text",
  className = "",
  value,
  onChange,
}: InputProductFormProps) {
  return (
    <div className={`relative ${className}`}>
      <label className="block text-dark-grey ml-2 font-sans">{title}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full h-14 py-2 rounded-xl border text-black p-4 font-sans focus:outline-none ${className}`}
      />
    </div>
  );
}
