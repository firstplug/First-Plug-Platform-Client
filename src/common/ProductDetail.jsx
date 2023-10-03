import React from "react";
import notebook1 from "../../public/notebook1.png";
import airpods from "../../public/airpods.png";
import Image from "next/image";
export default function ProductDetail({
  product,
  className = "",
  isChecked = false,
}) {
  return (
    <div
      className={`flex gap-2 border rounded-md p-2  text-black ${className}`}
    >
      {isChecked ? <input type="checkbox" className="w-5 h-5" /> : null}

      <Image
        src={product.category === "Notebook" ? notebook1 : airpods}
        className="h-[5rem] w-auto "
        alt={`${product.category}`}
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Category:</h1>
          <span className="font-light">{product.category}</span>
        </div>

        <hr />

        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Model:</h1>
          <span className="font-light">{product.model}</span>
        </div>
        <p className="text-dark-grey text-md">{product.description}</p>

        {product.quantity ? (
          <>
            <hr />

            <div className="flex gap-2 items-center">
              <h1 className="font-normal text-lg">Quantity:</h1>
              <span className="font-normal text-lg">{product.quantity}</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
