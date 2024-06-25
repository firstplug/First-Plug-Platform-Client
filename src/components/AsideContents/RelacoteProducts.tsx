import { ArrowLeft, AsideTitle } from "@/common";
import ProductDetail from "@/common/ProductDetail";
import { Product } from "@/types";
import React from "react";
interface IRelacoteProducts {
  products: Product[];
  handleBack: () => void;
}

export function RelacoteProducts({ products, handleBack }: IRelacoteProducts) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center gap-1 font-medium select-none cursor-pointer"
        onClick={handleBack}
      >
        <ArrowLeft />
        <p>Relocate items</p>
      </div>
      {products.map((product) => (
        <ProductDetail product={product} isRelocating />
      ))}
    </div>
  );
}
