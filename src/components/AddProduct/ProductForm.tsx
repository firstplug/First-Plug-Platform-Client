"use client";
import React, { useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { Button, PageLayout, SectionTitle } from "@/common";
import { useStore } from "@/models/root.store";
import {
  Category,
  Product,
  AttributeModel,
  emptyProduct,
  zodCreateProductModel,
  CreateProductModel,
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
    products: { addProduct, updateProduct },
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
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(initialData?.category);
  const [assignedEmail, setAssignedEmail] = useState(
    initialData?.assignedEmail
  );
  const [attributes, setAttributes] = useState(initialData?.attributes || []);

  const handleCategoryChange = useCallback(
    (category: Category | undefined) => {
      setSelectedCategory(category);
      setValue("category", category || undefined);
      setValue("recoverable", category !== "Merchandising");
    },
    [setValue]
  );

  const handleSaveProduct = async (data: Product) => {
    const formatData: Product = {
      ...emptyProduct,
      ...data,
      status: data.assignedEmail ? "Delivered" : "Available",
      category: selectedCategory || "Other",
      attributes: cast(attributes.map((attr) => AttributeModel.create(attr))),
    };

    try {
      if (isUpdate && initialData) {
        const updatedProduct = await ProductServices.updateProduct(
          initialData._id,
          formatData
        );
        updateProduct(updatedProduct);
        setTimeout(() => {
          setAside(undefined);
        }, 2000);
        setShowSuccessDialog(true);
      } else {
        const response = await ProductServices.createProduct(formatData);
        addProduct(response);
        setShowSuccessDialog(true);
      }
      methods.reset();
      setSelectedCategory(undefined);
      setAssignedEmail(undefined);
      await ProductServices.getAllProducts();

      setTimeout(() => {
        router.push("/home/my-stock");
      }, 2000);
    } catch (error) {
      setShowErrorDialog(true);
    }
  };

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  return (
    <FormProvider {...methods}>
      <PageLayout>
        <div className="h-full w-full ">
          <div className="absolute max-h-[90%] h-[90%] w-[80%] overflow-y-auto pr-4">
            <div className="px-10 py-4 rounded-3xl border">
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
              <div className="flex flex-col lg:flex:row gap-4 max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
                <div className="px-10 py-4 rounded-3xl border">
                  <section>
                    <DynamicForm
                      fields={FormConfig.fields}
                      handleAttributesChange={setAttributes}
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
              router.push("/home/my-stock");
            }}
          />
          <GenericAlertDialog
            open={showErrorDialog}
            onClose={() => setShowErrorDialog(false)}
            title="Error"
            description={`Error ${
              isUpdate ? "updating" : "creating"
            } your product, please check the data and try again.`}
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
