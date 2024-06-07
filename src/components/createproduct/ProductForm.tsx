"use client";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CategoryForm from "./CategoryForm";
import DynamicAttributesForm from "./DynamicAttributesForm";
import {
  CATEGORIES,
  LOCATION,
  emptyProduct,
  zodCreateProductModel,
  Category,
  Product,
  AttributeModel,
  Key,
} from "@/types";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import computerData from "../AddProduct/JSON/computerform.json";
import audioData from "../AddProduct/JSON/audioform.json";
import monitorData from "../AddProduct/JSON/monitorform.json";
import peripheralsData from "../AddProduct/JSON/peripheralsform.json";
import othersData from "../AddProduct/JSON/othersform.json";
import merchandisingData from "../AddProduct/JSON/merchandisingform.json";
import { ProductServices } from "@/services";
import { cast } from "mobx-state-tree";
import { SectionTitle } from "@/common";

interface ProductFormProps {
  initialData?: Product;
  isUpdate?: boolean;
}

const categoryComponents: Record<
  Category,
  { fields: { name: string; title: string; options: string[] }[] }
> = {
  Computer: computerData,
  Monitor: monitorData,
  Audio: audioData,
  Peripherals: peripheralsData,
  Other: othersData,
  Merchandising: merchandisingData,
};

const ProductForm: React.FC<ProductFormProps> = () => {
  const {
    products: { addProduct },
    aside: { setAside },
    members: { members },
  } = useStore();

  const [attributes, setAttributes] = useState<{ key: Key; value: string }[]>(
    []
  );

  const methods = useForm({
    resolver: zodResolver(zodCreateProductModel),
    defaultValues: { ...emptyProduct },
  });

  const { handleSubmit, watch, setValue, clearErrors, setError } = methods;
  const category = watch("category");

  const handleCategoryChange = (value) => {
    setValue("category", value);
    if (value === "Merchandising") {
      setValue("recoverable", false);
    } else {
      setValue("recoverable", true);
    }
  };

  const handleAssignedMemberChange = (value: string) => {
    if (value === "None" || value === "") {
      setValue("assignedEmail", "");
      setValue("assignedMember", "None");
      setValue("location", undefined);
      setValue("status", "Available");
    } else {
      const selectedMember = members.find(
        (member) => `${member.firstName} ${member.lastName}` === value
      );
      setValue("assignedEmail", selectedMember?.email || "");
      setValue("assignedMember", value);
      setValue("location", "Employee");
      setValue("status", "Delivered");
    }
    clearErrors("assignedMember");
  };

  const mapMembers = () => {
    return members.map((member) => ({
      email: member.email,
      fullName: `${member.firstName} ${member.lastName}`,
    }));
  };

  const onSubmit = async (data: Product) => {
    const attributeModels = attributes.map((attr) =>
      AttributeModel.create({
        _id: "",
        key: attr.key,
        value: attr.value,
      })
    );
    const productData: Product = {
      ...data,
      attributes: cast(attributeModels),
      name: data.category === "Merchandising" ? data.name || "" : data.name,
    };

    try {
      await ProductServices.createProduct(productData);
      addProduct(productData);
    } catch (error) {
      console.error("Failed to create product", error);
    }
  };

  const FormConfig = category ? categoryComponents[category] : { fields: [] };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="h-full w-full ">
          <div className="absolute h-[90%] w-[80%] overflow-y-auto pr-4">
            <div className="px-4 py-2 rounded-3xl border">
              <SectionTitle className="text-[20px]">Add Product</SectionTitle>
              <CategoryForm
                categories={Array.from(CATEGORIES)}
                locations={Array.from(LOCATION)}
                members={mapMembers()}
                handleCategoryChange={handleCategoryChange}
                handleAssignedMemberChange={handleAssignedMemberChange}
              />
            </div>

            {category && (
              <div className="flex flex-col lg:flex:row gap-4 max-h-[100%] h-[90%] w-full  mt-4">
                <div className="px-4 py-6 rounded-3xl border overflow-y-auto max-h-[500px] pb-40">
                  <section>
                    <DynamicAttributesForm
                      category={category as Category}
                      fields={FormConfig.fields}
                      onAttributesChange={setAttributes}
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
          <aside className="absolute flex justify-end bg-white w-[80%] bottom-0 p-2 h-[10%] border-t">
            <button type="submit">Save</button>
          </aside>
        </div>
      </form>
    </FormProvider>
  );
};

export default observer(ProductForm);
