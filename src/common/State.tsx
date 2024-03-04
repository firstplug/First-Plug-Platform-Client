import { OrderStatus } from "@/types";
import { StateColors, StatusColors } from "./StatusColors";

export interface StateProps {
  status?: OrderStatus;
  message?: string;
}

export function OrderState({ status }: StateProps) {
  const colorClass = status
    ? `${StatusColors[StateColors[status]]}`
    : "bg-disabled"; // If we dont've state, use a default bg

  const statusLength = status ? status.length : 0;

  return (
    <p
      className={`${colorClass}  py-1 rounded-full text-sm font-medium  border px-2`}
      style={{ width: `${statusLength + 2}ch` }}
    >
      {status}
    </p>
  );
}
