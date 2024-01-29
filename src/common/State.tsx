import { StateColors, OrderStatus } from "./StatusColors";

export interface StateProps {
  status?: OrderStatus;
  className?: string;
  message?: string;
}

export function State({ status, className }: StateProps) {
  const colorClass = status ? StateColors[status] : "bg-disabled"; // Si no hay estado, usa un color por defecto

  
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