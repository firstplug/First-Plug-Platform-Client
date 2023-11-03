"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "@/models/root.store";

export default function EquipmentRow({
  id,
  idTeamMember,
  date,
  state,
  price,
  className = "",
}) {
  const { orders, aside } = useStore();
  const [member, setMember] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/teamMembers/${idTeamMember}`)
      .then((res) => {
        setMember(res.data);
      });
  }, []);

  return (
    <tr className={` text-left ${className}`}>
      <td
        onClick={() => {
          orders.setSelectedOrder(id);
          aside.setAside("orderDetails");
          aside.openAside();
        }}
        className="pl-5 py-3 text-blue cursor-pointer"
      >
        #{id}
      </td>
      <td className="pl-3 py-3">
        {member.firstName} {member.lastName}
      </td>
      <td className="pl-3 py-3">{date}</td>
      <td className="pl-3 py-3 ">{state}</td>

      <td className="pl-3 py-3">USD {price}</td>
    </tr>
  );
}
