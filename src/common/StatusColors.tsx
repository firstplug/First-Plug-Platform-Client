import { OrderStatus } from "@/types";

export const StatusColors = {
  pending: "bg-lightPurple",
  info: "bg-lightBlue",
  warn: "bg-lightRed",
  success: "bg-lightGreen",
  error: "bg-red",
  disabled: "bg-disabled",
} as const;

export type StatusColor = keyof typeof StatusColors;

export const StateColors: Record<OrderStatus, StatusColor> = {
  ConfirmationPending: "pending",
  PaymentPending: "warn",
  Canceled: "warn",
  Confirmed: "success",
  // CLOSED: "disabled",
  // OPEN: "success",
  // DELIVERED: "success",
  // "MISSING DATA": "warn",
  // PREPARING: "warn",
  // AVAILABLE: "pending",
  // SHIPPED: "success",
} as const;

export const JobPositionColors: Record<string, string> = {
  HR: "bg-pink-400",
  DEV: "bg-green",
  QA: "bg-purple",
  SALES: "bg-yellow-200",
  DESIGN: "bg-red-200",
};

export type JobPosition = keyof typeof JobPositionColors;
