import React from "react";
import { StatusCircleIcon } from "./Icons";

export default function ShipmentStatus({ status }) {
  return (
    <span className="flex items-center gap-1 font-light">
      <StatusCircleIcon status={status} />
      {status.slice(0, 1).toUpperCase().concat(status.slice(1))}
    </span>
  );
}
