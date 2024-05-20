import { useStore } from "@/models";
import { ProductServices } from "@/services";
import { Product, Category, AttributeModel } from "@/types";
import { observer } from "mobx-react-lite";
import { useEffect, useState, useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodCreateProductModel } from "@/types";
import CategoryForm from "@/components/AddProduct/CategoryForm";
import DynamicForm from "@/components/AddProduct/DynamicForm";
import { Button, PageLayout, SectionTitle } from "@/common";
import { cast } from "mobx-state-tree";
import computerData from "@/components/AddProduct/JSON/computerform.json";
import audioData from "@/components/AddProduct/JSON/audioform.json";
import monitorData from "@/components/AddProduct/JSON/monitorform.json";
import peripheralsData from "@/components/AddProduct/JSON/peripheralsform.json";
import othersData from "@/components/AddProduct/JSON/othersform.json";
import merchandisingData from "@/components/AddProduct/JSON/merchandisingform.json";
import ProductDetail from "@/common/ProductDetail";

const categoryComponents = {
  Computer: computerData,
  Monitor: monitorData,
  Audio: audioData,
  Peripherals: peripheralsData,
  Other: othersData,
  Merchandising: merchandisingData,
};

export var EditProductAside = observer(function EditProductAside() {
  const {
    products: { productToEdit, updateProduct },
  } = useStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const methods = useForm({
    resolver: zodResolver(zodCreateProductModel),
    defaultValues: {
      _id: "",
      name: "",
      category: undefined,
      assignedEmail: undefined,
      status: "",
      location: "",
      recoverable: false,
      acquisitionDate: "",
      attributes: [],
      createdAt: "",
      updatedAt: "",
      deletedAt: "",
      deleted: false,
      serialNumber: "",
    },
  });

  const {
    handleSubmit,
    setValue,
    clearErrors,
    formState: { isSubmitting },
  } = methods;

  const [selectedCategory, setSelectedCategory] = useState<Category | "">("");
  const [assignedEmail, setAssignedEmail] = useState<string>("");
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    if (productToEdit) {
      console.log("Fetching product details for:", productToEdit);
      setLoading(true);
      setError(null);
      ProductServices.getProductById(productToEdit)
        .then((res) => {
          console.log("Fetched product details:", res);
          setProduct(res);
          setSelectedCategory(res.category);
          setAssignedEmail(res.assignedEmail);
          setAttributes(res.attributes);
          methods.reset(res);
          Object.entries(res).forEach(([key, value]) => {
            setValue(key as any, value);
          });
          console.log("res tiene todos los datos?:", res);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error fetching product details:", err);
          setError("Error fetching product details");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [productToEdit, methods, setValue]);

  const handleInput = useCallback(
    (key: string, value: unknown) => {
      setValue(key as any, value);
    },
    [setValue]
  );

  const handleCategoryChange = useCallback(
    (category: Category) => {
      setSelectedCategory(category);
      handleInput("category", category);
      handleInput("recoverable", category !== "Merchandising");
    },
    [handleInput]
  );

  const handleUpdateProduct = async (data: Product) => {
    const formatData: Product = {
      ...product,
      ...data,
      category: selectedCategory || "Other",
      attributes: cast(attributes.map((attr) => AttributeModel.create(attr))),
    };

    try {
      const response = await ProductServices.updateProduct(
        formatData._id,
        formatData
      );
      updateProduct(response);
      console.log("Product updated successfully:", response);
    } catch (error) {
      console.log("Error updating product", error);
    }
  };

  const FormConfig = categoryComponents[selectedCategory] || { fields: [] };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <FormProvider {...methods}>
      <PageLayout>
        <ProductDetail product={product} />
        <div className="relative h-full w-full bg-gray-50">
          <div className="absolute max-h-[90%] h-[90%] w-full overflow-y-auto">
            <div className="px-10 py-4 rounded-3xl border">
              <SectionTitle className="text-[20px]">Edit Product</SectionTitle>
              <section>
                <CategoryForm
                  handleInput={handleInput}
                  handleCategoryChange={handleCategoryChange}
                  selectedCategory={selectedCategory}
                  setAssignedEmail={(email) => setValue("assignedEmail", email)}
                  formState={methods.getValues()}
                  clearErrors={clearErrors as any}
                />
              </section>
            </div>
            {selectedCategory && (
              <div className="flex flex-col lg:flex-row gap-4 max-h-[90%] h-[90%] w-full overflow-y-auto mt-4">
                <div className="px-10 py-4 rounded-3xl border">
                  <section>
                    <DynamicForm
                      fields={FormConfig.fields || []}
                      handleAttributesChange={setAttributes}
                    />
                  </section>
                </div>
              </div>
            )}
          </div>
          <aside className="absolute flex justify-end bg-white w-full bottom-0 p-2 h-[10%] border-t">
            <Button
              body="Update"
              variant="primary"
              className="rounded lg"
              size={"big"}
              onClick={handleSubmit(handleUpdateProduct)}
              disabled={isSubmitting}
            />
          </aside>
        </div>
      </PageLayout>
    </FormProvider>
  );
});
