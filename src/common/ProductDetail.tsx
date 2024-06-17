import React from "react";
import { Product } from "@/types";
import { ProductImage } from "./ProductImage";
import PrdouctModelDetail from "./PrdouctModelDetail";

interface ProductDetailProps {
  product: Product;
  className?: string;
  isChecked?: boolean;
  handleSelect?: (productId: string) => void;
}

export default function ProductDetail({
  product,
  className = "",
  handleSelect,
  isChecked = false,
}: ProductDetailProps) {
  return (
    <div
      className={`relative flex gap-2 border rounded-sm p-2 mr-2 text-black mb-2 ${className} `}
    >
      <div className="flex items-center gap-2 ">
        <input
          type="checkbox"
          onChange={() => handleSelect(product._id)}
          checked={isChecked}
        />
        <section className="flex gap-2 items-start">
          <div className="flex gap-2 items-start">
            <ProductImage category={product.category} />
            <span className="font-semibold">{product.category}</span>
          </div>

          <hr />

          <div className="flex gap-2 items-center">
            <PrdouctModelDetail product={product} />
          </div>
        </section>
      </div>
    </div>
  );
}
