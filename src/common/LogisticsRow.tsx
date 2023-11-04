import { Interface } from "readline";
import State from "./State";

interface LogisticsRowProps{
  month: string;
  shipmentQuantity: number;
  state: string;
  total: number;
  className?: string;
}

export default function LogisticsRow({
  month,
  shipmentQuantity,
  state,
  total,
  className = "",
} : LogisticsRowProps) {
  return (
    <tr className={`border-gray-200 text-left ${className}`}>
      <td className="pl-5 py-3 ">{month}</td>
      <td className="pl-3 py-3">{shipmentQuantity}</td>
      <td className="pl-3 py-3">
        <State message={state} />
      </td>
      <td className="pl-3 py-3">USD {total}</td>
    </tr>
  );
}
