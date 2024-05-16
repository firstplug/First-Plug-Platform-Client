import { Category, Key, Product } from "@/types";
import React from "react";
interface PrdouctModelDetailProps {
  product: Product;
}
export default function PrdouctModelDetail({
  product,
}: PrdouctModelDetailProps) {
  if (!product) return null;
  const { attributes, category, name } = product;

  const CATEGORY_KEYS: Record<Category, readonly Key[]> = {
    Merchandising: [],
    Computer: ["brand", "model", "processor", "ram", "storage"],
    Monitor: ["brand", "model", "screen"],
    Audio: ["brand", "model"],
    Peripherals: ["brand", "model"],
    Other: ["brand", "model"],
  };
  const categoryKeys = CATEGORY_KEYS[product.category];
  const attributesToShow = attributes.filter((attribute) =>
    categoryKeys.includes(attribute.key)
  );

  const getValue = (key: Key) => {
    return attributesToShow.filter((at) => at.key === key)[0]?.value;
  };

  return (
    <div className="flex gap-4 text-md">
      {categoryKeys.map((cat) =>
        getValue(cat) ? (
          <div className="flex flex-col    " key={cat}>
            <span className="font-normal   ">{cat}</span>
            <span className="font-thin text-dark-grey -mt-1">
              {getValue(cat)}
            </span>
          </div>
        ) : null
      )}
    </div>
  );
}
