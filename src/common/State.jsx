export default function State({ message, className = "" }) {
  const states = [
    { state: "CONFIRMATION PENDING", color: "bg-lightPurple" },
    { state: "PAYMENT PENDING", color: "bg-lightYellow" },
    { state: "ORDER CANCELED", color: "bg-lightRed" },
    { state: "ORDER CONFIRMED", color: "bg-lightGreen" },
    { state: "CLOSED", color: "bg-disabled" },
    { state: "OPEN", color: "bg-lightBlue" },
  ];

  const stateObj = states.find((stateItem) => stateItem.state === message);
  const backgroundColorClass = stateObj ? stateObj.color : "";

  return (
    <p
      className={`${backgroundColorClass} ${className} py-1  rounded-full text-sm font-medium text-center whitespace-nowrap bg-disabled `}
      style={{ width: `${message?.length + 1}ch` }}
    >
      {message}
    </p>
  );
}
