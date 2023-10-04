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

export default function TableRow({ id, name, status, actions, className }) {
  const statusColorClass = statusColors[status] || "";
  return (
    <table
      className={`w-full h-10 bg-white flex items-center justify-between p-8 gap-x-40 border-t-2 border-grey ${
        className || ""
      } text-center `}
    >
      <tr>
        <td className="text-black text-center">{id}</td>
      </tr>
      <tr>
        <td className="text-black text-center">{name}</td>
      </tr>
      <tr>
        <td
          className={`text-black ${statusColorClass} px-[8px] py-[4px] rounded-[200px] font-montserrat text-[12px] font-semibold text-center`}
        >
          {status.toUpperCase()}
        </td>
      </tr>
      <tr>
        <td className="text-black font-semibold text-center">{actions}</td>
      </tr>
      <tr>
        <Button
          icon={<TrashIcon color="red" />}
          className="h-[32px] w-[32px] color"
        />
      </tr>
    </table>
  );
}
