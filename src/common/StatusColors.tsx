export const StatusColors = {
  pending: "bg-lightPurple",
  info: "bg-lightBlue",
  warn: "bg-lightRed",
  success: "bg-lightGreen",
  error: "bg-red",
  disabled: "bg-disabled",
} as const;

export type StatusColor = keyof typeof StatusColors;

export type OrderStatus =
  | "CONFIRMATION PENDING"
  | "PAYMENT PENDING"
  | "ORDER CANCELED"
  | "ORDER CONFIRMED"
  | "CLOSED"
  | "OPEN"
  | "DELIVERED"
  | "MISSING DATA"
  | "PREPARING"
  | "AVAILABLE"
  | "SHIPPED";

export const StateColors: Record<OrderStatus, StatusColor> = {
  "CONFIRMATION PENDING": "pending",
  "PAYMENT PENDING": "warn",
  "ORDER CANCELED": "warn",
  "ORDER CONFIRMED": "success",
  CLOSED: "disabled",
  OPEN: "success",
  DELIVERED: "success",
  "MISSING DATA": "warn",
  PREPARING: "warn",
  AVAILABLE: "pending",
  SHIPPED: "success",
} as const;

export const JOB_POSITION_COLORS = [
  "bg-pink-400",
  "bg-green",
  "bg-purple",
  "bg-yellow-200",
  "bg-red-200",
];

export type JobPosition = (typeof JOB_POSITION_COLORS)[number];

export function mapStatusToOrderStatus(
  status: string
): OrderStatus | undefined {
  const statusMap: Record<string, OrderStatus> = {
    "Confirmation Pending": "CONFIRMATION PENDING",
    "Payment Pending": "PAYMENT PENDING",
    "Order Canceled": "ORDER CANCELED",
    "Order Confirmed": "ORDER CONFIRMED",
    Closed: "CLOSED",
    Open: "OPEN",
    Delivered: "DELIVERED",
    "Missing Data": "MISSING DATA",
    Preparing: "PREPARING",
    Available: "AVAILABLE",
    Shipped: "SHIPPED",
  };

  return statusMap[status] || undefined;
}
