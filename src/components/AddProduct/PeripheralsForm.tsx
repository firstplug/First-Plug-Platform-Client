"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import peripheralsData from "./JSON/peripheralsform.json";

export const PeripheralsForm = function ({ handleInput }) {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [keyboardLanguage, setKeyboardLanguage] = React.useState("");

  const brandOptions = peripheralsData.brands;
  const modelOptions = peripheralsData.models;
  const colorOptions = peripheralsData.colors;
  const keyboardLanguageOptions = peripheralsData.keyboards;

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        <DropdownInputProductForm
          options={brandOptions}
          placeholder="Brand"
          title="Brand"
          name="brand"
          selectedOption={brand}
          onChange={(option) => {
            setBrand(option);
            handleInput("brand", option);
          }}
          required="required"
        />
        <DropdownInputProductForm
          options={modelOptions}
          placeholder="Model"
          title="Model"
          name="model"
          selectedOption={model}
          onChange={(option) => {
            setModel(option);
            handleInput("model", option);
          }}
          required="required"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <DropdownInputProductForm
          options={colorOptions}
          placeholder="Color"
          title="Color"
          name="color"
          selectedOption={color}
          onChange={(option) => {
            setColor(option);
            handleInput("color", option);
          }}
          required="required"
        />
        <DropdownInputProductForm
          options={keyboardLanguageOptions}
          placeholder="Keyboard Language"
          title="Keyboard Language"
          name="keyboard"
          selectedOption={keyboardLanguage}
          onChange={(option) => {
            setKeyboardLanguage(option);
            handleInput("keyboardLanguage", option);
          }}
          required="required"
        />
      </div>
    </div>
  );
};
