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
} as const;

export const JobPositionColors: string[] = [
  "bg-pink-400",
  "bg-green",
  "bg-purple",
  "bg-yellow-200",
  "bg-red-200",
];

export type JobPosition = keyof typeof JobPositionColors;
