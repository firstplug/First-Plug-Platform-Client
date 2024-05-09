import { CATEGORY_KEYS, Key, Product } from "@/types";
import React from "react";
interface PrdouctModelDetailProps {
  product: Product;
}
export default function PrdouctModelDetail({
  product,
}: PrdouctModelDetailProps) {
  if (!product) return null;
  const { attributes, category, name } = product;
  const categoryKeys = CATEGORY_KEYS[product.category];

  const attributesToShow = attributes.filter((attribute) =>
    categoryKeys.includes(attribute.key)
  );

  const getValue = (key: Key) => {
    return attributesToShow.filter((at) => at.key === key)[0].value;
  };

  switch (category) {
    case "Computer": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{getValue("model")} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Procesador</span>
              <p className="font-normal">{getValue("processor")}</p>
            </div>
            <div className="flex gap-1 ">
              <span className="font-semibold ">RAM</span>
              <p className="font-normal">{getValue("ram")}</p>
            </div>
            <div className="flex gap-1 ">
              <span className="font-semibold ">SSD</span>
              <p className="font-normal">{getValue("storage")}</p>
            </div>
            <div className="flex gap-1 ">
              <span className="font-semibold ">Screen</span>
              <p className="font-normal">
                {getValue("screen")} {""}
              </p>
            </div>
            <div className="flex gap-1 ">
              <span className="font-semibold ">GPU</span>
              <p className="font-normal">{getValue("gpu")}</p>
            </div>
          </div>
        </div>
      );
    }
    case "Monitor": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{getValue("model")} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Marca</span>
              <p className="font-normal">{getValue("brand")}</p>
            </div>
            <div className="flex  gap-1">
              <span className="font-semibold ">Screen</span>
              <p className="font-normal">
                {getValue("screen")} {""}
              </p>
            </div>
          </div>
        </div>
      );
    }
    case "Audio": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{getValue("model")} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Marca</span>
              <p className="font-normal">{getValue("brand")}</p>
            </div>
            <div className="flex  gap-1">
              <span className="font-semibold ">Color</span>
              <p className="font-normal">{getValue("color")}</p>
            </div>
          </div>
        </div>
      );
    }
    case "Merchandising": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{name} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Color</span>
              <p className="font-normal">{getValue("color")}</p>
            </div>
          </div>
        </div>
      );
    }
    case "Other": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{name} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Marca</span>
              <p className="font-normal">{getValue("brand")}</p>
            </div>

            <div className="flex  gap-1">
              <span className="font-semibold ">Nombre</span>
              <p className="font-normal">{name}</p>
            </div>
          </div>
        </div>
      );
    }
    case "Peripherals": {
      return (
        <div className="flex flex-col w-full gap-">
          <h2 className="text-xl">{getValue("model")} </h2>

          <div className="flex gap-2 text-md">
            <div className="flex  gap-1">
              <span className="font-semibold ">Marca</span>
              <p className="font-normal">{getValue("brand")}</p>
            </div>
            <div className="flex  gap-1">
              <span className="font-semibold ">Color</span>
              <p className="font-normal">{getValue("color")}</p>
            </div>
          </div>
        </div>
      );
    }
  }
}
