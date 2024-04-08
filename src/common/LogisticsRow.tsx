import { Shipment, ShipmentByMonthStatus } from "@/types";
import { OrderState } from "./State";

interface LogisticsRowProps {
  shipment: ShipmentByMonthProps;
  className?: string;
}

interface ShipmentByMonthProps {
  month: string;
  shipments: Shipment[];
  status: ShipmentByMonthStatus;
  price: number;
}

export function LogisticsRow({ shipment, className }: LogisticsRowProps) {
  return (
    <tr className={`border-gray-200 text-left ${className}`}>
      <td className="pl-5 py-3 ">{shipment.month}</td>
      <td className="pl-3 py-3">{shipment.shipments.length}</td>
      <td className="pl-3 py-3">
        <OrderState message={shipment.status} />
      </td>
      <td className="pl-3 py-3">USD {shipment.price}</td>
    </tr>
  );
}
