import { Product } from "@/types";
import Image from "next/image";
import React from "react";
interface ProductImageProps {
  product: Product;
}
export function ProductImage({ product }: ProductImageProps) {
  return (
    <div className="relative h-20  aspect-square   ">
      <Image
        src={`/stock/${product.category}.png`}
        alt={`${product.category} First Plug Stock`}
        fill
        objectFit="contain"
        className=" drop-shadow-lg "
      />
    </div>
  );
}
