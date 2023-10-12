import React, { useEffect, useState } from "react";

import Image from "next/image";
import { ProductServices } from "@/services/product.services";

export default function ProductDetail({
  product,
  className = "",
  isChecked = false,
}) {
  const [products, setProducts] = useState();

  const getProductId = async () => {
    const response = await ProductServices.getProductById(product);
    setProducts(response);
  };

  useEffect(() => {
    getProductId();
  }, []);

  if (!products) {
    return null;
  }

  return (
    <div
      className={`flex gap-2 border rounded-md p-2  text-black ${className}`}
    >
      {isChecked ? <input type="checkbox" className="w-5 h-5" /> : null}

      <Image
        src={products.imgUrl}
        className="h-[5rem] w-auto "
        width={40}
        height={40}
        alt={"imagen-producto"}
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Category:</h1>
          <span className="font-light">{products.category}</span>
        </div>

        <hr />

        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Model:</h1>
          <span className="font-light">{products.model}</span>
        </div>
        <p className="text-dark-grey text-md">{products.screen}</p>

        {products.quantity ? (
          <>
            <hr />

            <div className="flex gap-2 items-center">
              <h1 className="font-normal text-lg">Quantity:</h1>
              <span className="font-normal text-lg">{products.quantity}</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
