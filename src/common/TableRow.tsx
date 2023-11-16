"use client";
import React from "react";
import { TrashIcon } from "@/common/Icons";
import {Button} from "./Button";

// TODO: move all status and colors to type file because we use it in State.tsx too

interface TableRowProps {
  id: string;
  name: string;
  status: Status;
  className?: string;
  actions: string;
}

type Status =
  | "MISSING DATA"
  | "DELIVERED"
  | "PREPARING"
  | "AVAILABLE"
  | "SHIPPED";

const StatusColors = {
  missingData: "bg-lightRed",
  delivered: "bg-lightGreen",
  preparing: "bg-lightYellow",
  available: "bg-lightPurple",
  shipped: "bg-lightBlue",
} as const;

type Color = keyof typeof StatusColors;

const StateColors: Record<Status, Color> = {
  "MISSING DATA": "missingData",
  DELIVERED: "delivered",
  PREPARING: "preparing",
  AVAILABLE: "available",
  SHIPPED: "shipped",
} as const;

export  function TableRow({
  id,
  name,
  status,
  actions,
  className,
}: TableRowProps) {
  const Color = StateColors[status] || "";

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
          className={`text-black ${Color} px-[8px] py-[4px] rounded-[200px] font-montserrat text-[12px] font-semibold text-center`}
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
