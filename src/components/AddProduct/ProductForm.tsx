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
  const [selectedCategory, setSelectedCategory] = useState<Category | "">(
    initialData?.category || ""
  );
  const [assignedEmail, setAssignedEmail] = useState<string>(
    initialData?.assignedEmail || ""
  );
  const [attributes, setAttributes] = useState(initialData?.attributes || []);

  type ProductField = keyof CreateProductModel;

  const handleInput = useCallback(
    (key: ProductField, value: string | boolean) => {
      setValue(key, value);
      clearErrors(key);
    },
    [setValue, clearErrors]
  );

  const handleCategoryChange = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      handleInput("category", category);
      handleInput("recoverable", category !== "Merchandising");
    },
    [handleInput]
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
        await ProductServices.updateProduct(initialData._id, formatData);
        updateProduct(formatData);
      } else {
        const response = await ProductServices.createProduct(formatData);
        addProduct(response);
      }
      methods.reset();
      setSelectedCategory("");
      setAssignedEmail("");
      setShowSuccessDialog(true);
    } catch (error) {
      setShowErrorDialog(true);
    }
  };

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  return (
    <FormProvider {...methods}>
      <PageLayout>
        <div className="relative h-full w-full">
          <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
            <div className="px-10 py-4 rounded-3xl border">
              <SectionTitle className="text-[20px]">
                Add Product
                {isUpdate ? "Update Product" : "Add Product"}
              </SectionTitle>
              <section>
                <CategoryForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  setAssignedEmail={(email) => setValue("assignedEmail", email)}
                  formState={methods.getValues()}
                  clearErrors={
                    clearErrors as (name?: string | string[]) => void
                  }
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
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
          <aside className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t">
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
      </PageLayout>
    </FormProvider>
  );
};

export default observer(ProductForm);
