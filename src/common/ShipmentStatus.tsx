import React from "react";
import { StatusCircleIcon } from "./Icons";

const status = ["incomplete", "complete"] as const;

interface ShipmentStatusProps {
  status: (typeof status)[number];
}

export default function ShipmentStatus({ status }: ShipmentStatusProps) {
  // TODO: remove from here "status" and move it to types carpet that is doing to Fran

  return (
    <span className="flex items-center gap-1 font-light">
      <StatusCircleIcon status={status} />
      {status.slice(0, 1).toUpperCase().concat(status.slice(1))}
    </span>
  );
}
