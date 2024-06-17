import { Category, Key, Product } from "@/types";
import React from "react";
interface PrdouctModelDetailProps {
  product: Product;
}
export default function PrdouctModelDetail({
  product,
}: PrdouctModelDetailProps) {
  if (!product) return null;
  const { attributes } = product;

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
    return attributesToShow.filter((at) => at.key === key)[0]?.value;
  };

  return (
    <div className="flex flex-col">
      {product.category === "Merchandising" ? (
        <span className="text-lg">{product.name}</span>
      ) : (
        <div className="flex gap-1 text-lg  ">
          <span className="font-semibold">
            {product.attributes.filter((at) => at.key === "brand")[0].value}
          </span>
          <span className=" font-normal">
            {product.attributes.filter((at) => at.key === "model")[0].value}
          </span>
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
