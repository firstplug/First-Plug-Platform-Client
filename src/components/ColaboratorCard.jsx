import React from "react";
import Photo from "../../public/Colaborator.png";
import Image from "next/image";
import Button from "@/common/Button";
import TeamCard from "@/common/TeamCard";
import { PenIcon, TrashIcon } from "@/common/Icons";

export default function ColaboratorCard({
  name,
  lastName,
  img,
  jobPosition,
  products,
  shimentsDetails = "incomplete",
  team,
  className,
}) {
  return (
    <article
      className={`flex flex-col gap-2  mx-auto rounded-lg border border-border p-4 font-inter ${className}`}
    >
      <header className="flex justify-between items-start">
        <div className="flex gap-2">
          <div>
            <Image
              src={img || Photo}
              alt="colabPhoto"
              className="h-full object-contain"
            />
          </div>
          <div className="ml-1 flex flex-col  items-start">
            <TeamCard team={team} />
            <h1 className="text-black font-bold">
              {name} {lastName}
            </h1>
            <b className="text-dark-grey">#001</b>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            icon={
              <PenIcon
                stroke={2}
                className="text-dark-grey w-[1.2rem] h-[1.2rem]"
              />
            }
          />
          <Button
            body={
              <TrashIcon
                stroke={2}
                className=" text-dark-grey w-[1.2rem] h-[1.2rem]"
              />
            }
          />
        </div>
      </header>
      <section className="flex flex-col gap-2 justify-start">
        <div className="flex   items-center gap-3">
          <h2 className="font-semibold text-lg">Job Position: </h2>
          <p>{jobPosition}</p>
        </div>
        <div className="flex items-center  gap-3">
          <h2 className="font-semibold text-lg">Products</h2>
          <p className="bg-border  rounded-full h-6 w-6 text-center  grid place-items-center items text-sm">
            {products.length}
          </p>
        </div>
        <div className="flex  items-center gap-3">
          <h2 className="font-semibold">Shipment Details:</h2>
          <p className="flex items-center gap-2">
            {/* Agreagar este icon al Icons common */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle
                cx="4"
                cy="4"
                r="4"
                fill={shimentsDetails === "complete" ? "#15CC8A" : "#FA1048"}
              />
            </svg>
            {shimentsDetails
              .slice(0, 1)
              .toUpperCase()
              .concat(shimentsDetails.slice(1))}
          </p>
        </div>
      </section>
    </article>
  );
}
