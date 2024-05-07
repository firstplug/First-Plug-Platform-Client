"use client";
import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import { Product } from "@/types";
import { CategoryForm } from "@/components/AddProduct/CategoryForm";
import { ComputerForm } from "@/components/AddProduct/ComputerForm";
import { MonitorForm } from "@/components/AddProduct/MonitorForm";
import { AudioForm } from "@/components/AddProduct/AudioForm";
import { PeripheralsForm } from "@/components/AddProduct/PeripheralsForm";
import { OthersForm } from "@/components/AddProduct/OthersForm";
import { useForm, FormProvider } from "react-hook-form";

const categoryComponents = {
  Computer: ComputerForm,
  Monitor: MonitorForm,
  Audio: AudioForm,
  Peripherals: PeripheralsForm,
  Other: OthersForm,
};

export default observer(function AddOneProduct() {
  const {
    products: { addProduct },
  } = useStore();
  const [productData, setProductData] = useState<Partial<Product>>({});
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [finished, setFinished] = useState(false);
  const { register, handleSubmit } = useForm();

  const methods = useForm();
  const { handleSubmit: handleSubmitForm } = methods;

  // const handleSubmitForm = handleSubmit((data) => {
  //   console.log(data);
  // });

  const handleInput = useCallback((key: string, value: unknown) => {
    setProductData((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
  }, []);

  const handleAddProduct = () => {
    addProduct(productData as Product);
    setProductData({});
    setFinished(true);
  };

  const FormComponent = categoryComponents[selectedCategory];

  return (
    <FormProvider {...methods}>
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
                />
              </section>
            </div>
            {FormComponent && (
              <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
                <div className="px-10 py-4 rounded-3xl border">
                  <section>
                    <FormComponent />
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
