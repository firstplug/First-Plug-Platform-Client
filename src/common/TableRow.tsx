"use client";
import React from "react";
import { TrashIcon } from "@/common/Icons";
import { Button } from "./Button";
import { StateColors, OrderStatus } from "./StatusColors";

interface TableRowProps {
  id: string;
  name: string;
  status: OrderStatus;
  className?: string;
  actions: string;
}

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
