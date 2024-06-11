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
    Computer: ["processor", "ram", "storage", "screen"],
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
    return attributesToShow.find((at) => at.key === key)?.value || "-";
  };
  console.log("brand", getValue("brand"));
  console.log("model", getValue("model"));

  return (
    <div className="flex flex-col">
      {product.category === "Merchandising" ? (
        <span className="text-xl">{product.name}</span>
      ) : (
        <div className="flex gap-1 text-[18px]">
          <span className="font-semibold">{getValue("brand")}</span>
          <span className="font-normal">{getValue("model")}</span>
        </div>
      )}
      <div className="flex gap-4 text-md">
        {categoryKeys
          .filter((c) => c !== "brand" && c !== "model")
          .map((cat) => (
            <div className="flex flex-col    " key={cat}>
              <span className="font-normal   ">{cat} </span>
              <span className="font-thin text-dark-grey -mt-1">
                {getValue(cat) || "-"}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
