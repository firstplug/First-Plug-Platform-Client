import React from "react";
import Button from "@/common/Button";
import ProductDetail from "@/common/ProductDetail";
import MemberDetail from "@/common/MemberDetail";

export default function MemberAsideDetails({ member, className }) {
  const data = [
    {
      image: "./notebook1.png",
      category: "Notebook",
      model: "MacBook Pro 14",
      description: "CPU: M2 Pro | RAM: 16GB | SSD: 512GB",
    },
    {
      image: "./airpods.png",
      category: "Airpods",
      model: "Airpod",
      description: "Wireless earbuds for Apple devices",
    },
  ];
  return (
    <article
      className={`${className || ""} flex flex-col justify-between h-full`}
    >
      <div className="flex flex-col gap-6 ">
        <MemberDetail {...member} />

        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h1 className="font-semibold text-xl">Products</h1>
            <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
              {member.products.length}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {data.map((product, index) => (
              <ProductDetail product={product} key={index} />
            ))}
          </div>
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
}
