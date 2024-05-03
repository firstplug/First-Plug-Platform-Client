"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import { Button, FormLayout, PageLayout, SectionTitle } from "@/common";
import { FormInput } from "@/components";
import { useStore } from "@/models/root.store";
import { Product } from "@/types";
import { ComputerForm } from "@/components/AddProduct/ComputerForm";

export default observer(function AddOneProduct() {
  const {
    products: { addProduct },
  } = useStore();
  const [productData, setProductData] = React.useState<Partial<Product>>({});
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const handleInput = (key: string, value: unknown) => {
    // setProductData((prev) => ({
    //   ...prev,
    //   [key]: value,
    // }));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const categoryOptions = [
    "Merchandising",
    "Computer",
    "Monitor",
    "Audio",
    "Peripherals",
    "Other",
  ];

  const brand = [
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
    <PageLayout>
      <div className="relative h-full w-full">
        <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
          <div className="px-10 py-4 rounded-3xl border">
            <SectionTitle className="text-[20px]">Add Product</SectionTitle>
            <section className="w-1/2">
              <FormInput
                options={categoryOptions}
                placeholder="Category"
                title="Category"
                prop={"category"}
                handleInput={(value: string) => {
                  handleCategoryChange(value);
                  handleInput("category", value);
                }}
                type="options"
                required={"required"}
              />
              <FormInput
                placeholder="Product Name"
                title="Product Name"
                type="text"
                prop={"name"}
                handleInput={handleInput}
                required={"required"}
              />
              {/* Renderizar el formulario correspondiente según la categoría seleccionada */}
              {/* {selectedCategory === "Merchandising" && (
                <MerchandisingForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                />
              )} */}
              {selectedCategory === "Computer" && (
                <ComputerForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                />
              )}
              {/* {selectedCategory === "Monitor" && (
                <MonitorForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                />
              )}
              {selectedCategory === "Audio" && (
                <AudioForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                />
              )}
              {selectedCategory === "Peripherals" && (
                <PeripheralsForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                />
              )} */}
            </section>
          </div>
          <div className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t rou">
            <Button
              body="Save"
              variant="primary"
              className="rounded lg"
              size="big"
              onClick={() => addProduct(productData as Product)}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
});
