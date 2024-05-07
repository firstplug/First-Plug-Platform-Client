"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import monitorData from "./JSON/monitorform.json";

export const MonitorForm = function ({ handleInput }) {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [color, setColor] = React.useState("");
  const [screen, setScreen] = React.useState("");

  const brandOptions = monitorData.brands;
  const modelOptions = monitorData.models;
  const colorOptions = monitorData.colors;
  const screenOptions = monitorData.screens;

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
            options={screenOptions}
            placeholder="Screen"
            title="Screen"
            name="screen"
            selectedOption={screen}
            onChange={(option) => {
              setScreen(option);
              handleInput("screen", option);
            }}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
