"use client";
import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import { Product } from "@/types";
import CategoryForm from "@/components/AddProduct/CategoryForm";
import { ComputerForm } from "@/components/AddProduct/ComputerForm";
import { MonitorForm } from "@/components/AddProduct/MonitorForm";
import { AudioForm } from "@/components/AddProduct/AudioForm";
import { PeripheralsForm } from "@/components/AddProduct/PeripheralsForm";
import { OthersForm } from "@/components/AddProduct/OthersForm";
import { useForm, FormProvider } from "react-hook-form";
import { ProductServices } from "@/services/product.services";
// import { Category, key, CATEGORY_KEYS } from "@/types";

const categoryComponents = {
  Computer: ComputerForm,
  Monitor: MonitorForm,
  Audio: AudioForm,
  Peripherals: PeripheralsForm,
  Other: OthersForm,
};

const productProperties = [
  "brand",
  "model",
  "color",
  "screen",
  "keyboardLanguage",
  "processor",
  "ram",
  "storage",
  "gpu",
];

export default observer(function AddOneProduct() {
  const {
    products: { addProduct },
  } = useStore();
  const [productData, setProductData] = useState<Partial<Product>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [assignedEmail, setAssignedEmail] = useState<string>("");

  const { handleSubmit, control } = useForm();

  const handleInput = useCallback((key: string, value: unknown) => {
    setProductData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleCategoryChange = useCallback(
    (category: string) => {
      setSelectedCategory(category);
      handleInput("category", category);
      handleInput("recoverable", category !== "Merchandising");
    },
    [handleInput]
  );

  const handleAddProduct = handleSubmit(async () => {
    const productAttributes = Object.entries(productData)
      .filter(([key, value]) => productProperties.includes(key) && value)
      .map(([key, value]) => ({
        key,
        value,
      }));
    const formatData = {
      category: productData.category,
      acquisitionDate: productData.acquisitionDate
        ? new Date(productData.acquisitionDate).toISOString()
        : "",
      name: productData.name,
      location: productData.location,
      attributes: productAttributes,
      assignedEmail: productData.assignedEmail,
      serialNumber: productData.serialNumber,
      status: productData.assignedEmail ? "Delivered" : "Available",
      recoverable: productData.recoverable,
    };
    console.log("Product data to be sent:", productData);

    ProductServices.createProduct(formatData as Product)
      .then((res) => {
        alert("Product created!");
        setProductData({});
        addProduct(res);
      })
      .catch((error) => {
        console.log("Error creating product", error);
        alert("Error!");
      });
  });

  const FormComponent = categoryComponents[selectedCategory];

  return (
    <FormProvider {...useForm()}>
      <PageLayout>
        <div className="relative h-full w-full">
          <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
            <div className="px-10 py-4 rounded-3xl border">
              <SectionTitle className="text-[20px]">Add Product</SectionTitle>
              <section>
                <CategoryForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  setAssignedEmail={setAssignedEmail}
                />
              </section>
            </div>
            {FormComponent && (
              <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
                <div className="px-10 py-4 rounded-3xl border">
                  <section>
                    <FormComponent handleInput={handleInput} />
                  </section>
                </div>
              </div>
            )}
            <div className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t rou">
              <Button
                body="Save"
                variant="primary"
                className="rounded lg"
                size="big"
                onClick={handleAddProduct}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    </FormProvider>
  );
});
