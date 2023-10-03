"use client";
import State from "./State";

export default function EquipmentRow({
  id,
  name,
  date,
  state,
  price,
  className = "",
  handleClick,
}) {
  return (
    <tr className={`border-gray-200 text-left ${className}`}>
      <td
        onClick={() => handleClick(id)}
        className="pl-5 py-3 text-blue cursor-pointer"
      >
        #{id}
      </td>
      <td className="pl-3 py-3">{name}</td>
      <td className="pl-3 py-3">{date}</td>
      <td className="pl-3 py-3">
        <State message={state} />
      </td>
      <td className="pl-3 py-3">USD {price}</td>
    </tr>
  );
}
