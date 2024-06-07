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

    console.log("Product Data", productData);
    console.log("attributes", attributeModels);
    try {
      await ProductServices.createProduct(productData);
      addProduct(productData);
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const messages = error.response.data.message;
        messages.forEach((msg) => {
          if (msg.includes("brand")) {
            setError("attributes.0.value", {
              type: "manual",
              message: "Brand is required",
            });
          } else if (msg.includes("model")) {
            setError("attributes.1.value", {
              type: "manual",
              message: "Model is required",
            });
          } else if (msg.includes("name")) {
            setError("name", { type: "manual", message: "Name is required" });
          }
        });
      } else {
        console.error("Failed to create product", error);
      }
    }
  };

  const FormConfig = category ? categoryComponents[category] : { fields: [] };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CategoryForm
          categories={Array.from(CATEGORIES)}
          locations={Array.from(LOCATION)}
          members={mapMembers()}
          handleCategoryChange={handleCategoryChange}
          handleAssignedMemberChange={handleAssignedMemberChange}
        />
        {category && (
          <DynamicAttributesForm
            category={category as Category}
            fields={FormConfig.fields}
            onAttributesChange={setAttributes}
          />
        )}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default observer(ProductForm);
