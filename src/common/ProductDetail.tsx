import React from "react";
import { Product } from "@/types";
import { ProductImage } from "./ProductImage";
import PrdouctModelDetail from "./PrdouctModelDetail";

interface ProductDetailProps {
  product: Product;
  className?: string;
  isChecked?: boolean;
}

export default function ProductDetail({
  product,
  className = "",
}: // isChecked = false,
ProductDetailProps) {
  return (
    <div
      className={`relative flex gap-2 border rounded-md p-2 mr-2 text-black mb-2 ${className}`}
    >
      <input type="checkbox" className="absolute top-2 left-2 w-5 h-5 z-10" />

      <div className="flex gap-2 ml-8">
        <ProductImage category={product.category} />
        <div className="flex flex-col w-full gap-2">
          <div className="flex gap-2 items-center">
            <h1 className="font-normal text-lg">Category:</h1>
            <span className="font-light">{product.category}</span>
          </div>

          <hr />

          <div className="flex gap-2 items-center">
            <PrdouctModelDetail product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
