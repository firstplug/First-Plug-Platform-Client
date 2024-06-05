"use client";
import React, { useState } from "react";
import { Button } from "@/common";
import { AddIcon, ShopIcon, UploadIcon } from "@/common/Icons";
import { useRouter } from "next/navigation";
import { useStore } from "@/models";
import { observer } from "mobx-react-lite";
import { ProductsTable } from "@/components/Tables";
import { ProductServices } from "@/services";

export default observer(function DataStock() {
  const router = useRouter();
  const {
    products: { products, tableProducts, setTable },
    aside: { setAside },
  } = useStore();

  const [showOnlyAvaliable, setShowOnlyAvaliable] = useState(false);

  const transformProducts = (products) => {
    if (!Array.isArray(products)) return [];
    return products.map((product) => ({
      category: product.category,
      products: product.products ? product.products : [product],
    }));
  };

  const toggleShowOnlyAvailable = async () => {
    setShowOnlyAvaliable(!showOnlyAvaliable);
    if (!showOnlyAvaliable) {
      try {
        const availableProducts = await ProductServices.getAvailableProducts();
        console.log("availableProducts", availableProducts);
        const transformedProducts = transformProducts(availableProducts);
        console.log("transformedProducts", transformedProducts);
        setTable(transformedProducts);
      } catch (error) {
        console.error("Error fetching available products", error);
      }
    } else {
      try {
        const allProducts = await ProductServices.getTableFormat();
        console.log("allProducts", allProducts);
        const transformedProducts = transformProducts(allProducts);
        console.log("transformedProducts", transformedProducts);
        setTable(transformedProducts);
      } catch (error) {
        console.error("Error fetching all products", error);
      }
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 relative  ">
      <aside className="flex justify-between items-center h-[6%]   ">
        <div className="flex gap-2">
          <input
            type="checkbox"
            checked={showOnlyAvaliable}
            onChange={toggleShowOnlyAvailable}
          />
          <label className="ml-2 text-gray-500">
            Show only avaliable stock
          </label>
        </div>

        <div className="flex gap-2   ">
          <Button
            className="rounded-md py-2 px-4"
            variant="secondary"
            body="Add Product"
            icon={<AddIcon />}
            onClick={() => {
              router.push("/home/my-stock/addOneProduct");
            }}
          />

          <Button
            className="rounded-md py-2 px-4"
            variant="secondary"
            body="Load Stock"
            icon={<UploadIcon />}
            onClick={() => setAside("LoadStock")}
          />

          <Button
            className="rounded-md py-2 px-4"
            variant="primary"
            icon={<ShopIcon />}
            body="Shop Now"
            onClick={() => {
              router.push("/shop");
            }}
          />
        </div>
      </aside>

      <div className="h-[90%] top-[8%] w-full overflow-y-auto  absolute ">
        <ProductsTable products={tableProducts} />
      </div>
    </div>
  );
});
