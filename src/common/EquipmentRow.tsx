"use client";
import { ReactElement  } from "react";
import { useStore } from "@/models/root.store";

interface EquipmentRowProps {
  id: number;
  idTeamMember: number;
  date: string;
  state: string | ReactElement;
  price: number;
  className?: string;
}

export function EquipmentRow({
  id,
  idTeamMember,
  date,
  state,
  price,
  className = "",
}: EquipmentRowProps) {

  const {
    orders : { orders },
    aside: {setAside, openAside},
    members: {selectedMember}
  } = useStore();

  return (
    <tr className={` text-left ${className}`}>
      <td
        onClick={() => {
          orders;
          setAside("OrderDetails");
          openAside();
        }}
        className="pl-5 py-3 text-blue cursor-pointer"
      >
        #{id}
      </td>
      <td className="pl-3 py-3">
        {selectedMember.firstName} {selectedMember.lastName}
      </td>
      <td className="pl-3 py-3">{date}</td>
      <td className="pl-3 py-3 ">{state}</td>

      <td className="pl-3 py-3">USD {price}</td>
    </tr>
  );
}
