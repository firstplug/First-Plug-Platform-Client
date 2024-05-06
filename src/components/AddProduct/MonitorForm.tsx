"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";

export const MonitorForm = function () {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [screen, setScreen] = React.useState("");

  const brandOptions = [
    "Apple",
    "Samsung",
    "Dell",
    "HP",
    "Lenovo",
    "Logitech",
    "Ledger",
    "Other",
  ];
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
            placeholder="Model"
            title="Model"
            selectedOption={model}
            onChange={(option) => setModel(option)}
            required="required"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            placeholder="Color"
            title="Color"
            selectedOption={color}
            onChange={(option) => setColor(option)}
            required="required"
          />
          <DropdownInputProductForm
            placeholder="Screen"
            title="Screen"
            selectedOption={screen}
            onChange={(option) => setScreen(option)}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
