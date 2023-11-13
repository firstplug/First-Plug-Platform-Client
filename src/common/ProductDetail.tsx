import React from "react";
import Image from "next/image";
import { useStore } from "@/models";

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

  const {products: {selectedProduct} } = useStore();

  return (
    <div
      className={`flex gap-2 border rounded-md p-2  text-black ${className}`}
    >
      {isChecked ? <input type="checkbox" className="w-5 h-5" /> : null}

      <Image
        src={selectedProduct.imgUrl}
        className="h-[5rem] w-auto "
        width={40}
        height={40}
        alt={"imagen-producto"}
      />
      <div className="flex flex-col w-full gap-2">
        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Category:</h1>
          <span className="font-light">{selectedProduct.category}</span>
        </div>

        <hr />

        <div className="flex gap-2 items-center">
          <h1 className="font-normal text-lg">Model:</h1>
          <span className="font-light">{selectedProduct.model}</span>
        </div>
        <p className="text-dark-grey text-md">{selectedProduct.screen}</p>

        {selectedProduct.quantity ? (
          <>
            <hr />

            <div className="flex gap-2 items-center">
              <h1 className="font-normal text-lg">Quantity:</h1>
              <span className="font-normal text-lg">{selectedProduct.quantity}</span>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
