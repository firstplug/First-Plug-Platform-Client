import React from "react";
import Photo from "../../public/Colaborator.png";
import notebook1 from "../../public/notebook1.png";
import airpods from "../../public/airpods.png";

import Image from "next/image";
import Button from "@/common/Button";
import TeamCard from "@/common/TeamCard";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";

export default function MemberDetails({
  name,
  lastName,
  img,
  jobPosition,
  products,
  dateBirth,
  joiningDate,
  shimentsDetails = "incomplete",
  team,
  className,
}) {
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
    <article className={`${className || ""} flex flex-col gap-6`}>
      <div className="flex gap-2">
        <Image src={Photo} alt="member" className="h-[10rem] w-auto" />
        <div className="flex flex-col w-full  justify-start gap-2  ">
          <div className="flex w-full justify-between items-center">
            <TeamCard team={team} />

            <div className="flex gap-2">
              <Button icon={<PenIcon className={"h-[1.2rem]"} />} />
              <Button icon={<TrashIcon className={" h-[1.2rem]"} />} />
            </div>
          </div>

          <b className="text-xl">
            {name} {lastName}
          </b>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <span className="font-normal"> Date Of Birth: </span>
              <span className="font-light"> {dateBirth || "05/09/2023"} </span>
            </div>
            |
            <div className="flex gap-1">
              <span className="font-normal">Joining Date:</span>
              <span className="font-light">{joiningDate || "05/09/2023"}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-1">
              <span className="font-normal"> Shipment Details: </span>
              <span className="flex items-center gap-2 font-light">
                <StatusCircleIcon status={shimentsDetails} />
                {shimentsDetails}
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="font-semibold text-xl">Products</h1>
          <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
            {products.length}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {data.map((product) => (
            <div className="flex gap-2 border rounded-md p-2">
              <input type="checkbox" className="w-5 h-5" />
              <Image
                src={product.category === "Notebook" ? notebook1 : airpods}
                className="h-[7rem] w-auto "
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
              </div>
            </div>
          ))}
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
