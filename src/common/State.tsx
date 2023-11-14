interface StateProps {
  message: string;
  className?: string;
}

const Colors = {
  "CONFIRMATION PENDING": "bg-lightPurple",
  "PAYMENT PENDING": "bg-lightYellow",
  "ORDER CANCELED": "bg-lightRed",
  "ORDER CONFIRMED": "lightGreen",
  CLOSED: "bg-disabled",
  OPEN: "bg-lightBlue",
  DELIVERED: "bg-lightGreen",
  "MISSING DATA": "bg-lightRed",
  PREPARING: "bg-lightYellow",
  AVAILABLE: "bg-lightPurple",
  SHIPPED: "bg-lightBlue",
};

type OrderStatus =
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

type State = {
  state: OrderStatus;
  color: keyof typeof Colors;
};

const states: State[] = [
  { state: "CONFIRMATION PENDING", color: "CONFIRMATION PENDING" },
  { state: "PAYMENT PENDING", color: "PAYMENT PENDING" },
  { state: "ORDER CANCELED", color: "ORDER CANCELED" },
  { state: "ORDER CONFIRMED", color: "ORDER CONFIRMED" },
  { state: "CLOSED", color: "CLOSED" },
  { state: "OPEN", color: "OPEN" },
  { state: "DELIVERED", color: "DELIVERED" },
  { state: "MISSING DATA", color: "MISSING DATA" },
  { state: "PREPARING", color: "PREPARING" },
  { state: "AVAILABLE", color: "AVAILABLE" },
  { state: "SHIPPED", color: "SHIPPED" },
];

export default function State({ message, className }: StateProps) {
  const stateObj = states.find((stateItem) => stateItem.state === message);
  const backgroundColorClass = stateObj ? Colors[stateObj.color] : "";

  return (
    <p
      className={`${backgroundColorClass} ${className} py-1  rounded-full text-sm font-medium text-center whitespace-nowrap bg-disabled `}
      style={{ width: `${message?.length + 2}ch` }}
    >
      {message}
    </p>
  );
}
