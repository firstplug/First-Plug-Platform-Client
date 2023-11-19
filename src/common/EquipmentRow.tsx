"use client";
import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import { useStore } from "@/models/root.store";
import { TeamMember } from "@/types";

interface EquipmentRowProps {
  id: string;
  idTeamMember: number;
  date: string;
  state: string | ReactElement;
  price: number;
  className?: string | "";
}

export default function EquipmentRow({
  id,
  idTeamMember,
  date,
  state,
  price,
  className = "",
}: EquipmentRowProps) {
  const {
    orders: { setSelectedOrder },
    aside: { setAside },
  } = useStore();
  const [member, setMember] = useState<TeamMember>();

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
          setSelectedOrder(id);
          setAside("OrderDetails");
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
