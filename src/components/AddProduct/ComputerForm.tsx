"use client";
import React from "react";
import { DropdownInputProductForm } from "./DropDownProductForm";
import computerData from "./JSON/computerform.json";

export const ComputerForm = function () {
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [processor, setProcessor] = React.useState("");
  const [ram, setRam] = React.useState("");
  const [storage, setStorage] = React.useState("");

  const brandOptions = computerData.brands;
  const modelOptions = computerData.models;
  const processorOptions = computerData.processors;
  const ramOptions = computerData.rams;
  const storageOptions = computerData.storages;

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
            options={processorOptions}
            placeholder="Processor"
            title="Processor"
            selectedOption={processor}
            onChange={(option) => setProcessor(option)}
            required="required"
          />
          <DropdownInputProductForm
            options={ramOptions}
            placeholder="RAM"
            title="RAM"
            selectedOption={ram}
            onChange={(option) => setRam(option)}
            required="required"
          />
          <DropdownInputProductForm
            options={storageOptions}
            placeholder="Storage"
            title="Storage"
            selectedOption={storage}
            onChange={(option) => setStorage(option)}
            required="required"
          />
        </div>
      </div>
    </>
  );
};
