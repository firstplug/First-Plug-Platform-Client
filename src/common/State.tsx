import { StateColors, OrderStatus } from "./StatusColors";

export interface StateProps {
  status?: OrderStatus;
  className?: string;
  message?: string;
}

export function State({ status, className }: StateProps) {
  const Color = StateColors[status] || "";
  //This line broke the build because dont've data, length was undefined or null. Now, we validate length.
  const statusLength = status ? status.length : 0

  return (
    <p
      className={`${Color} ${className} py-1 rounded-full text-sm font-medium text-center whitespace-nowrap bg-disabled`}
      style={{ width: `${statusLength + 2}ch` }}
    >
      {status}
    </p>
  );
}
