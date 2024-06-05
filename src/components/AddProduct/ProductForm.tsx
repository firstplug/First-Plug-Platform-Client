"use client";
import React, { useState, useCallback, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import {
  Category,
  Product,
  AttributeModel,
  emptyProduct,
  zodCreateProductModel,
  Atrribute,
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
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import GenericAlertDialog from "@/components/AddProduct/ui/GenericAlertDialog";
import { Field } from "@/components/AddProduct/DynamicForm";

interface ProductFormProps {
  initialData?: Product;
  isUpdate?: boolean;
}

const categoryComponents = {
  Computer: computerData,
  Monitor: monitorData,
  Audio: audioData,
  Peripherals: peripheralsData,
  Other: othersData,
  Merchandising: merchandisingData,
};

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  isUpdate = false,
}) => {
  const {
    products: { addProduct, updateProduct, setTable },
    aside: { setAside },
  } = useStore();
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(zodCreateProductModel),
    defaultValues: initialData || emptyProduct,
  });
  const {
    handleSubmit,
    setValue,
    clearErrors,
    formState: { isSubmitting },
  } = methods;
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(initialData?.category);
  const [assignedEmail, setAssignedEmail] = useState(
    initialData?.assignedEmail
  );
  const [data, setData] = useState(initialData?.attributes || []);

  const handleCategoryChange = useCallback(
    (category: Category | undefined) => {
      if (!isUpdate) {
        setSelectedCategory(category);
        setValue("category", category || undefined);
        setValue("recoverable", category !== "Merchandising");
      }
    },
    [isUpdate, setValue]
  );

  const handleSaveProduct = async (newProduct: Product) => {
    setShowSuccessDialog(false);
    setShowErrorDialog(false);
    setErrorMessage("");

    console.log("Data received from form:", data);

    const formatData: Product = {
      ...emptyProduct,
      ...newProduct,
      status: newProduct.assignedEmail ? "Delivered" : "Available",
      category: selectedCategory || "Other",
      attributes: cast(
        data.map((attr) => {
          const initialAttr = initialData?.attributes.find(
            (ia) => ia.key === attr.key
          );
          return {
            ...AttributeModel.create(attr),
            value:
              attr.value !== ""
                ? attr.value
                : initialAttr
                ? initialAttr.value
                : attr.value,
          };
        })
      ),
      serialNumber:
        newProduct.serialNumber?.trim() === "" ? "" : newProduct.serialNumber,
    };

    console.log("Formatted data to be sent:", formatData);

    try {
      if (isUpdate && initialData) {
        // const changes: Partial<Product> = {};
        // const requiredFields = ["name", "category", "location", "status"];
        // requiredFields.forEach((field) => {
        //   changes[field] = formatData[field];
        // });

        // Object.keys(formatData).forEach((key) => {
        //   if (formatData[key] !== initialData[key]) {
        //     changes[key] = formatData[key];
        //   }
        // });

        // if (Object.keys(changes).length === 0) {
        //   setShowSuccessDialog(true);
        //   return;
        // }
        const updatedProduct = await ProductServices.updateProduct(
          initialData._id,
          formatData
        );

        console.log("Updated product response:", updatedProduct);

        updateProduct(updatedProduct);
        setShowSuccessDialog(true);
      } else {
        const response = await ProductServices.createProduct(formatData);
        console.log("Create product response:", response);
        addProduct(response);
        setShowSuccessDialog(true);
      }
      methods.reset();
      setSelectedCategory(undefined);
      setAssignedEmail(undefined);
      const products = await ProductServices.getTableFormat();
      setTable(products);

      // setTimeout(() => {
      //   router.push("/home/my-stock");
      // }, 2000);
    } catch (error) {
      console.log("Error response:", error);
      if (error.response?.data?.message === "Serial Number already exists") {
        setErrorMessage("Serial Number already exists");
      } else {
        setErrorMessage(
          `Error ${
            isUpdate ? "updating" : "creating"
          } your product, please check the data and try again.`
        );
      }
      setShowErrorDialog(true);
    }
  };

  const onAttributesChange = (newAttribute: Atrribute) =>
    setData((prev) =>
      prev.map((attr) => (attr.key === newAttribute.key ? newAttribute : attr))
    );

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  return (
    <FormProvider {...methods}>
      <PageLayout>
        <div className="h-full w-full ">
          <div className="absolute h-[90%] w-[80%] overflow-y-auto pr-4">
            <div className="px-4 py-2 rounded-3xl border">
              <SectionTitle className="text-[20px]">
                {isUpdate ? "" : "Add Product"}
              </SectionTitle>
              <section>
                <CategoryForm
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  setAssignedEmail={(email) => setValue("assignedEmail", email)}
                  formState={methods.getValues()}
                  clearErrors={
                    clearErrors as (name?: string | string[]) => void
                  }
                  isUpdate={isUpdate}
                />
              </section>
            </div>
            {selectedCategory && (
              <div className="flex flex-col lg:flex:row gap-4 max-h-[100%] h-[90%] w-full  mt-4">
                <div className="px-4 py-6 rounded-3xl border overflow-y-auto max-h-[500px] pb-40">
                  <section>
                    <DynamicForm
                      fields={FormConfig.fields as Field[]}
                      handleAttributesChange={onAttributesChange}
                      isUpdate={isUpdate}
                      initialValues={initialData}
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
          <aside className="absolute flex justify-end bg-white w-[80%] bottom-0 p-2 h-[10%] border-t">
            <Button
              body={isUpdate ? "Update" : "Save"}
              variant="primary"
              className="rounded lg"
              size={"big"}
              onClick={handleSubmit(handleSaveProduct)}
              disabled={isSubmitting}
            />
          </aside>
        </div>
        <div className="z-50">
          <GenericAlertDialog
            open={showSuccessDialog}
            onClose={() => setShowSuccessDialog(false)}
            title="Success"
            description={`Your product has been successfully ${
              isUpdate ? "updated" : "added"
            } to your stock.`}
            buttonText="OK"
            onButtonClick={() => {
              setShowSuccessDialog(false);
              setAside(undefined);
              if (isUpdate) {
                setTimeout(() => {
                  location.reload();
                }, 2000);
              } else {
                router.push("/home/my-stock");
              }
            }}
          />
          <GenericAlertDialog
            open={showErrorDialog}
            onClose={() => setShowErrorDialog(false)}
            title="Error"
            description={errorMessage}
            buttonText="OK"
            onButtonClick={() => {
              setShowErrorDialog(false);
            }}
          />
        </div>
      </PageLayout>
    </FormProvider>
  );
};

export default observer(ProductForm);
