"use client";
import React, { useCallback, useState } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import {
  Category,
  Product,
  CATEGORY_KEYS,
  Key,
  AttributeModel,
  emptyProduct,
} from "@/types";
import CategoryForm from "@/components/AddProduct/CategoryForm";
import { ProductServices } from "@/services/product.services";
import { cast } from "mobx-state-tree";
import computerData from "@/components/AddProduct/JSON/computerform.json";
import audioData from "@/components/AddProduct/JSON/audioform.json";
import monitorData from "@/components/AddProduct/JSON/monitorform.json";
import peripheralsData from "@/components/AddProduct/JSON/peripheralsform.json";
import othersData from "@/components/AddProduct/JSON/othersform.json";
import merchandisingData from "@/components/AddProduct/JSON/merchandisingform.json";
import DynamicForm from "@/components/AddProduct/DynamicForm";
import { GenericAlertDialog } from "@/components/AddProduct/ui/GenericAlertDialog";
import { useRouter } from "next/navigation";

const categoryComponents = {
  Computer: computerData,
  Monitor: monitorData,
  Audio: audioData,
  Peripherals: peripheralsData,
  Other: othersData,
  Merchandising: merchandisingData,
};

export default observer(function CreateProduct() {
  const {
    products: { addProduct },
  } = useStore();

  const router = useRouter();
  const [productData, setProductData] = useState<Partial<Product>>({});
  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [assignedEmail, setAssignedEmail] = useState<string>("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const handleInput = useCallback((key: string, value: unknown) => {
    setProductData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }, []);

  const handleCategoryChange = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      handleInput("category", category);
      handleInput("recoverable", category !== "Merchandising");
    },
    [handleInput]
  );

  const handleAddProduct = async () => {
    console.log("Product data:", productData);
    const formatData: Product = {
      ...emptyProduct,
      ...productData,
      status: productData.assignedEmail ? "Delivered" : "Available",
      category: selectedCategory || "Other",
    };
    const productAttributes: Partial<Product> = {};

    Object.keys(formatData).forEach((key) => {
      if (
        key !== "category" &&
        key !== "assignedEmail" &&
        key !== "acquisitionDate" &&
        key !== "status" &&
        key !== "location" &&
        key !== "recoverable" &&
        key !== "serialNumber" &&
        key !== "name"
      ) {
        productAttributes[key] = formatData[key];
        delete formatData[key];
      }
    });

    const keysForCategory = CATEGORY_KEYS[formatData.category];
    const attributes = keysForCategory
      .filter((key: Key) => productAttributes[key] !== undefined)
      .map((key: Key) => ({
        _id: "",
        key,
        value: productAttributes[key] || "",
      }));

    formatData.attributes = cast(
      attributes.map((attr) => AttributeModel.create(attr))
    );

    console.log("Product data to be sent:", formatData);

    try {
      const response = await ProductServices.createProduct(formatData);
      addProduct(response);
      // alert("Product created!");
      setProductData({});
      setSelectedCategory("");
      setAssignedEmail("");
      setShowSuccessDialog(true);
    } catch (error) {
      console.log("Error creating product", error);
      setShowErrorDialog(true);
    }
  };

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  return (
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
                formState={productData}
              />
            </section>
          </div>
          {selectedCategory && (
            <div className="flex flex-col lg:flex:row gap-4 max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
              <div className="px-10 py-4 rounded-3xl border">
                <section>
                  <DynamicForm
                    fields={FormConfig.fields}
                    handleInput={handleInput}
                    productData={productData}
                  />
                </section>
              </div>
            </div>
          )}
          <div className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t">
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
      <GenericAlertDialog
        open={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        title="Success"
        description="Your product has been successfully added to your stock."
        buttonText="OK"
        onButtonClick={() => {
          setShowSuccessDialog(false);
          router.push("/home/my-stock");
        }}
      />
      <GenericAlertDialog
        open={showErrorDialog}
        onClose={() => setShowErrorDialog(false)}
        title="Error"
        description="Error creating your product, please check the data and try again."
        buttonText="OK"
        onButtonClick={() => {
          setShowErrorDialog(false);
        }}
      />
    </PageLayout>
  );
});
