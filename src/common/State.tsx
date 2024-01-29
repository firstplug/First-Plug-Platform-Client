import { StateColors, OrderStatus } from "./StatusColors";

export interface StateProps {
  status?: OrderStatus;
  className?: string;
  message?: string;
}

export function State({ status, className }: StateProps) {
  const colorClass = status ? StateColors[status] : "bg-disabled"; // If we dont've state, use a default bg

  
  const statusLength = status ? status.length : 0;

  return (
    <p
      className={`${colorClass} ${className} py-1 rounded-full text-sm font-medium text-center whitespace-nowrap`}
      style={{ width: `${statusLength + 2}ch` }}
    >
      {status}
    </p>
  );
}