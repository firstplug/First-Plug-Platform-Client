export const Colors = {
    info: "bg-lightPurple",
    pending: "bg-lightYellow",
    warn: "bg-lightRed",
    confirmed: "bg-lightGreen",
    closed: "bg-disabled",
    success: "bg-lightBlue",
  } as const;
  
  type Color = keyof typeof Colors;
  
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
  
  export const StateColors: Record<OrderStatus, Color> = {
    "CONFIRMATION PENDING": "info",
    "PAYMENT PENDING": "pending",
    "ORDER CANCELED": "warn",
    "ORDER CONFIRMED": "confirmed",
    CLOSED: "closed",
    OPEN: "success",
    DELIVERED: "confirmed",
    "MISSING DATA": "warn",
    PREPARING: "pending",
    AVAILABLE: "info",
    SHIPPED: "success",
  } as const;