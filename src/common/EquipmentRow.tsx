"use client";
import { ReactElement, useState, useEffect } from "react";
import { useStore } from "@/models/root.store";
import { Order, TeamMember } from "@/types";
import axios from "axios";
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
        className="pl-5 py-3 text-blue cursor-pointer"
      >
        #{order._id.slice(10)}
      </td>
      <td className="pl-3 py-3">
        {selectedMember.firstName} {selectedMember.lastName}
      </td>
      <td className="pl-3 py-3">{order.date}</td>
      <td className="pl-3 py-3 ">
        <State message={order.status} />
      </td>

      <td className="pl-3 py-3">USD {orderPriceById(order._id)}</td>
    </tr>
  );
}
