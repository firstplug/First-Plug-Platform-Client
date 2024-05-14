"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import computerData from "./JSON/computerform.json";

export const ComputerForm = function ({ handleInput }) {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [processor, setProcessor] = React.useState("");
  const [ram, setRam] = React.useState("");
  const [storage, setStorage] = React.useState("");
  const [screen, setScreen] = React.useState("");
  const [keyboardLanguage, setKeyboardLanguage] = React.useState("");
  const [gpu, setGpu] = React.useState("");
  const [color, setColor] = React.useState("");

  const brandOptions = computerData.brands;
  const modelOptions = computerData.models;
  const processorOptions = computerData.processors;
  const ramOptions = computerData.rams;
  const storageOptions = computerData.storages;
  const screenOptions = computerData.screen;
  const keyboardLanguageOptions = computerData.keyboards;
  const gpuOptions = computerData.gpu;
  const colorOptions = computerData.colors;

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
              setModel(option), handleInput("model", option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            options={processorOptions}
            placeholder="Processor"
            title="Processor"
            name="processor"
            selectedOption={processor}
            onChange={(option) => {
              setProcessor(option), handleInput("processor", option);
            }}
            required="required"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <DropdownInputProductForm
            options={ramOptions}
            placeholder="RAM"
            title="RAM"
            name="ram"
            selectedOption={ram}
            onChange={(option) => {
              setRam(option), handleInput("ram", option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            options={storageOptions}
            placeholder="Storage"
            title="Storage"
            name="storage"
            selectedOption={storage}
            onChange={(option) => {
              setStorage(option), handleInput("storage", option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            options={gpuOptions}
            placeholder="GPU"
            title="GPU"
            name="gpu"
            selectedOption={gpu}
            onChange={(option) => {
              setGpu(option), handleInput("gpu", option);
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
              setScreen(option), handleInput("screen", option);
            }}
            required="required"
          />
          <DropdownInputProductForm
            options={keyboardLanguageOptions}
            placeholder="Keyboard Language"
            title="Keyboard Language"
            name="keyboardLanguage"
            selectedOption={keyboardLanguage}
            onChange={(option) => {
              setKeyboardLanguage(option),
                handleInput("keyboardLanguage", option);
            }}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
