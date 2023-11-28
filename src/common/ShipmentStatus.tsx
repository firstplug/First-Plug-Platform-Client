import React from "react";
import { StatusCircleIcon } from "./Icons";
import { ShipmentStatus } from "@/types";

interface ShipmentStatusProps {
  status: ShipmentStatus;
}

export function ShipmentStatus({ status }: ShipmentStatusProps) {
  return (
    <span className="flex items-center gap-1 font-light">
      <StatusCircleIcon />
      {status}
    </span>
  );
}
