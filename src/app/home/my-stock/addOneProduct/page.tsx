"use client";
import React from "react";
import { observer } from "mobx-react-lite";
import { Button, FormLayout, PageLayout, SectionTitle } from "@/common";
import { FormInput } from "@/components";
import { useStore } from "@/models/root.store";
import { Product } from "@/types";

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
      <div className="relative h-full   w-full  ">
        <div className=" absolute max-h-[90%] h-[90%] w-full overflow-y-auto   ">
          <div className=" px-10 py-4 rounded-3xl  border  ">
            <SectionTitle className="text-[20px]">Add Product</SectionTitle>
            <section className="  w-full ">
              <FormLayout className="w-1/2">
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
              </FormLayout>
            </section>
            <section className="  w-full ">
              <FormLayout className="w-1/2">
                <FormInput
                  options={brand}
                  placeholder="Brand"
                  title="Brand"
                  type="options"
                  prop={"brand"}
                  handleInput={handleInput}
                  required={"required"}
                />
              </FormLayout>
              <FormLayout className="w-full">
                <FormInput
                  placeholder="Model"
                  title="Model"
                  type="options"
                  prop={"model"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="Processor"
                  title="Processor"
                  type="options"
                  prop={"processor"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="RAM"
                  title="RAM"
                  type="options"
                  prop={"ram"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="Storage"
                  title="Storage"
                  type="options"
                  prop={"storage"}
                  handleInput={handleInput}
                  required={"required"}
                />
              </FormLayout>
              <FormLayout className="w-full">
                <FormInput
                  placeholder="Screen"
                  title="Screen"
                  type="options"
                  prop={"screen"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="Color"
                  title="Color"
                  type="options"
                  prop={"color"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="Keyboard Language"
                  title="Keyboard Language"
                  type="options"
                  prop={"keyboard"}
                  handleInput={handleInput}
                  required={"required"}
                />
                <FormInput
                  placeholder="GPU"
                  title="GPU"
                  type="options"
                  prop={"gpu"}
                  handleInput={handleInput}
                  required={"required"}
                />
              </FormLayout>
            </section>
          </div>
          <div className="absolute  flex justify-end bg-white w-full  bottom-0 p-2 h-[10%] border-t rou">
            <Button
              body="Save"
              variant="primary"
              className="rounded lg"
              size={"big"}
              onClick={() => addProduct(productData as Product)}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
});
