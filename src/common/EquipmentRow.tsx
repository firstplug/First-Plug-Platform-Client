"use client";
import { useStore } from "@/models/root.store";
import { Order } from "@/types";
import { State } from "./State";

interface EquipmentRowProps {
  order: Order;
  className?: string;
}

export function EquipmentRow({
  order,

  className = "",
}: EquipmentRowProps) {
  const {
    orders: { selectedOrder, setSelectedOrder, orderPriceById },
    members: { selectedMember },
    aside: { setAside },
  } = useStore();

  return (
    <tr className={` text-left ${className}`}>
      <td
        onClick={() => {
          setSelectedOrder(order._id);
          setAside("OrderDetails");
        }}
        style={{
          textOverflow: "ellipsis",
        }}
        className="pl-5 py-3 text-blue cursor-pointer text-ov"
      >
        {order._id}
      </td>
      <td className="pl-3 py-3">
        {selectedMember?.firstName} {selectedMember?.lastName}
      </td>
      <td className="pl-3 py-3">{order.date}</td>
      <td className="pl-3 py-3 ">
        <State message={order.status} />
      </td>

      <td className="pl-3 py-3">USD {orderPriceById(order._id)}</td>
    </tr>
  );
}
