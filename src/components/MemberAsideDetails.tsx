"use client";
import React from "react";
import { Button, EmptyCard, EmptyCardLayout, MemberDetail } from "@/common";
import { observer } from "mobx-react-lite";
import { useStore } from "@/models/root.store";
import ProductDetail from "@/common/ProductDetail";

interface MemberAsideDetailsProps {
  className?: string;
}

export const MemberAsideDetails = observer(function ({
  className,
}: MemberAsideDetailsProps) {
  const {
    members: { members, selectedMember },
  } = useStore();

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
                <h1 className="font-semibold text-xl">Products</h1>
                <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
                  {selectedMember.products.length || 0}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {selectedMember.products.length
                  ? selectedMember.products.map((product) => (
                      <ProductDetail product={product} key={product._id} />
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
      <div className="flex gap-2 w-full flex-nowrap">
        <Button
          body={"Remove"}
          variant={"delete"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
        <Button
          body={"Return"}
          variant={"secondary"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
        <Button
          body={"Relocate"}
          variant={"secondary"}
          size={"big"}
          className={"rounded-md w-1/3 "}
        />
      </div>
    </article>
  );
});
