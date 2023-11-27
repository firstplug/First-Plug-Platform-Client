import React from "react";
import { StatusCircleIcon } from "./Icons";
import { ShipmentStatus } from "@/types";

interface ShipmentStatusProps {
  status: ShipmentStatus
}

export function ShipmentStatus({ status }: ShipmentStatusProps) {
  // TODO: remove from here "status" and move it to types carpet that is doing to Fran

  return (
    <span className="flex items-center gap-1 font-light">
      <StatusCircleIcon />
      {status}
      {/* {status.slice(0, 1).toUpperCase().concat(status.slice(1))} */}
    </span>
  );
}
