import React from "react";
import { StatusCircleIcon } from "./Icons";
import { ShipmentStatus } from "@/types";
import { StatusColor } from "./StatusColors";

interface ShipmentStatusProps {
  status: ShipmentStatus
}

export function ShipmentStatus({ status }: ShipmentStatusProps) {
  const statusColor: StatusColor =
    status === 'Avaliable'
      ? 'info'
      : status === 'Delivered'
        ? 'success'
        : status === 'Missing Data'
          ? 'error'
          : status === 'Preparing'
            ? 'warn'
            : 'pending'

  return (
    <span className="flex items-center gap-1 font-light">
      <StatusCircleIcon color={statusColor} />
      {status}
    </span>
  );
}
