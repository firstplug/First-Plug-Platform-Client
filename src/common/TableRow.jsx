"use client";
import React from "react";
import { TrashIcon } from "@/common/Icons";
import Button from "./Button";

const statusColors = {
  missingData: "bg-lightRed",
  delivered: "bg-lightGreen",
  preparing: "bg-lightYellow",
  available: "bg-lightPurple",
  shipped: "bg-lightBlue",
};

const TableRow = ({ id, name, status, actions }) => {
  const statusColorClass = statusColors[status] || "";
  return (
    <main className="w-full h-10 bg-white flex items-center justify-between p-8 gap-x-40 border border-grey">
      <span className="text-black">{id}</span>
      <span className="text-black">{name}</span>
      <span
        className={`text-black ${statusColorClass} px-[8px] py-[4px] rounded-[200px] font-montserrat text-[12px] font-semibold`}
      >
        {status.toUpperCase()}
      </span>
      <Button icon={<TrashIcon />} className="h-[32px] w-[32px]" />
    </main>
  );
};

export default TableRow;
