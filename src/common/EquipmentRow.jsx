import State from "./State";

export default function EquipmentRow({ id, name, date, state, price }) {
  return (
    <tr className=" border-gray-200 text-left">
      <td className="pl-5 py-3 text-blue">#{id}</td>
      <td className="pl-3 py-3">{name}</td>
      <td className="pl-3 py-3">{date}</td>
      <td className="pl-3 py-3">
        <State message={state} />
      </td>
      <td className="pl-3 py-3">USD {price}</td>
    </tr>
  );
}
