"use client";
import CustomLink from "@/common/CustomLink";
import React, { useState } from "react";
import TableDetailsShipments from "./TableDetailsShipments";
import Button from "@/common/Button";
import { ArrowLeft } from "@/common/Icons";

export default function TableShipments({ orders = [], className, info = [] }) {
  const [rowOpenState, setRowOpenState] = useState(
    Array(info.length).fill(false)
  );

  const toggleRow = (index) => {
    const updatedRowOpenState = [...rowOpenState];
    updatedRowOpenState[index] = !updatedRowOpenState[index];
    setRowOpenState(updatedRowOpenState);
  };
  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden border border-grey  border-1 ${
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
        {orders.map((order, index) => (
          <>
            <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
              <td className="  py-4 px-3 ">{order.id}</td>
              <td className="  py-4 px-3">
                <b>{order.date}</b>
              </td>
              <td className="  py-4 px-3">{order.quantity}</td>
              <td className=" py-4 px-3">{order.type}</td>
              <td className=" py-4 px-3">
                <CustomLink href={"/"}>Link {">"}</CustomLink>
              </td>
              <td className=" py-4 px-3">$ {order.price}</td>
              <td className="  " onClick={() => toggleRow(index)}>
                <Button className="p-2  rounded-md">
                  Details <ArrowLeft className="rotate-[-90deg]" />
                </Button>
              </td>
            </tr>

            {rowOpenState[index] && (
              <tr>
                <td colSpan="12">
                  <TableDetailsShipments quantity={order.quantity} />
                </td>
              </tr>
            )}
          </>
        ))}
      </tbody>
    </table>
  );
}
