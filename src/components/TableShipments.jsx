import Button from "@/common/Button";
import CustomLink from "@/common/CustomLink";
import { PenIcon, StatusCircleIcon, TrashIcon } from "@/common/Icons";
import TeamCard from "@/common/TeamCard";
import React from "react";

export default function TableTeam({ orders, className }) {
  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Order ID</th>
          <th className="py-3 px-3">Order Date</th>
          <th className="py-3 px-3">Quantity Products</th>
          <th className="py-3 px-3">Type</th>
          <th className="py-3 px-3">Track</th>
          <th className="py-3 px-3">Price</th>
          <th className="py-3 px-3"></th>

          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
            <td className="  py-4 px-3 ">{order.id}</td>
            <td className="  py-4 px-3">
              <b>{order.date}</b>
            </td>
            <td className="  py-4 px-3">{order.quantity}</td>
            <td className=" py-4 px-3">{order.type}</td>
            <td className=" py-4 px-3">
              <CustomLink href={"*"}>Link {">"}</CustomLink>
            </td>
            <td className=" py-4 px-3">$ {order.price}</td>
            <td className=" py-4 px-3 ">Details</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
