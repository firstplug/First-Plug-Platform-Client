"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import peripheralsData from "./JSON/peripheralsform.json";

export const PeripheralsForm = function () {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [keyboard, setKeyboard] = React.useState("");

  const brandOptions = peripheralsData.brands;
  const modelOptions = peripheralsData.models;
  const colorOptions = peripheralsData.colors;
  const keyboardOptions = peripheralsData.keyboards;

  return (
    <>
      <div w-full>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={brandOptions}
            placeholder="Brand"
            title="Brand"
            selectedOption={brand}
            onChange={(option) => {
              setBrand(option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            options={modelOptions}
            placeholder="Model"
            title="Model"
            selectedOption={model}
            onChange={(option) => setModel(option)}
            required="required"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={colorOptions}
            placeholder="Color"
            title="Color"
            selectedOption={color}
            onChange={(option) => setColor(option)}
            required="required"
          />
          <DropdownInputProductForm
            options={keyboardOptions}
            placeholder="Keyboard"
            title="Keyboard"
            selectedOption={keyboard}
            onChange={(option) => setKeyboard(option)}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
