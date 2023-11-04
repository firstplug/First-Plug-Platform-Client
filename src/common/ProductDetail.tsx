import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ProductServices } from "@/services/product.services";
import { Product } from "@/models/products.store";

interface ProductDetailProps {
  productId: string;
  className?: string;
  isChecked?: boolean;
}

export default function ProductDetail({
  productId,
  className = "",
  isChecked = false,
}: ProductDetailProps) {

  const [product, setProduct] = useState<Product>();

  const getProductId = () => {
    ProductServices.getProductById(productId).then((res) => {
      setProduct(res);
    });
  };

  useEffect(() => {
    getProductId();
  }, []);

  if (!product) {
    return null;
  }

  return (
    <div
      className={`flex gap-2 border rounded-md p-2  text-black ${className}`}
    >
      {isChecked ? <input type="checkbox" className="w-5 h-5" /> : null}

      <Image
        src={product.imgUrl}
        className="h-[5rem] w-auto "
        width={40}
        height={40}
        alt={"imagen-producto"}
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
        <p className="text-dark-grey text-md">{product.screen}</p>

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
