"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import audioData from "./JSON/audioform.json";

export const AudioForm = function () {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");

  const brandOptions = audioData.brands;
  const modelOptions = audioData.models;
  const colorOptions = audioData.colors;

  return (
    <>
      <div w-full>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={brandOptions}
            placeholder="Brand"
            title="Brand"
            name="brand"
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
            name="model"
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
            name="color"
            selectedOption={color}
            onChange={(option) => setColor(option)}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
