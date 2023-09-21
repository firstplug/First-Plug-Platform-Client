import React from "react";
import Photo from "../../public/Colaborator.png";
import Image from "next/image";
import Button from "@/common/Button";
import TeamCard from "@/common/TeamCard";

function PenIcon({ className, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={stroke || 1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  );
}

function TrashIcon({ className, stroke }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={stroke || 1.5}
      stroke="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>
  );
}
export default function ColaboratorCard({
  name,
  lastName,
  img,
  jobPosition,
  products,
  shimentsDetails = "incomplete",
  team,
}) {
  return (
    <article className="flex flex-col gap-2 w-[400px] mx-auto rounded-lg border border-border p-4 font-inter">
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
            icon={<PenIcon stroke={2} className="text-dark-grey  text-sm" />}
          />
          <Button
            body={<TrashIcon stroke={2} className=" text-dark-grey text-sm " />}
          />
        </div>
      </header>
      <section className="flex flex-col gap-2 justify-start">
        <div className="flex   items-centergap-3">
          <h2 className="font-semibold">Job Position:</h2>
          <p>{jobPosition}</p>
        </div>
        <div className="flex items-center  gap-3">
          <h2 className="font-semibold">Products</h2>
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
