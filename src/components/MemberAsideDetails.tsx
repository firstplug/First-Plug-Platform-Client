"use client";
import React, { useState } from "react";
import { Button, EmptyCard, EmptyCardLayout, MemberDetail } from "@/common";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import ProductDetail from "@/common/ProductDetail";
import { Product } from "@/types";

interface MemberAsideDetailsProps {
  className?: string;
}

export const MemberAsideDetails = observer(function ({
  className,
}: MemberAsideDetailsProps) {
  const {
    members: { members, selectedMember },
  } = useStore();

  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleSelectProducts = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      return setSelectedProducts((s) => s.filter((id) => id !== productId));
    }

    setSelectedProducts((s) => [...s, productId]);
  };

  return (
    <article
      className={`${className || ""} flex flex-col justify-between h-full`}
    >
      <div className="flex flex-col gap-6  flex-grow">
        <MemberDetail />

        <hr />
        <div className="flex-grow  h-full p-1">
          {selectedMember.products.length ? (
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1 className="font-semibold text-lg">Products</h1>
                <p className="border border-black text-black font-bold  rounded-full h-6 w-6  grid place-items-center  text-sm">
                  {selectedMember.products.length || 0}
                </p>
              </div>

              <div className="flex flex-col gap-2 overflow-y-auto max-h-56 mb-6 ">
                {selectedMember.products.length
                  ? selectedMember.products.map((product) => (
                      <ProductDetail
                        product={product}
                        key={product._id}
                        handleSelect={handleSelectProducts}
                        isChecked={selectedProducts.includes(product._id)}
                      />
                    ))
                  : null}
              </div>
            </div>
          ) : (
            <EmptyCardLayout>
              <EmptyCard type="noStockMember" />
            </EmptyCardLayout>
          )}
        </div>
      </div>
      <aside className=" absolute  bg-white  py-2    bottom-0   left-0 w-full border-t ">
        <div className="flex    w-5/6 mx-auto gap-2 justify-end">
          <Button
            body={"Remove"}
            variant={"delete"}
            size={"small"}
            disabled={selectedProducts.length === 0}
          />
          <Button
            body={"Return"}
            variant={"secondary"}
            size={"small"}
            disabled={selectedProducts.length === 0}
          />
          <Button
            body={"Relocate"}
            variant={"secondary"}
            size={"small"}
            disabled={selectedProducts.length === 0}
          />
        </div>
      </aside>
    </article>
  );
});
