"use client";

import { useState, Fragment } from "react";
import TableDetails from "./TableDetails";
import ButtonMyStock from "@/common/ButtonMyStock";
import useModal from "@/hooks/useModal";
import Image from "next/image";

export default function Table({ className }) {
  const { openModal } = useModal();
  const data = [
    {
      id: "1",
      imagen: "/notebook1.png",
      category: "Notebook ",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 16GB | SSD: 512GB",
      quantity: 5,
    },
    {
      id: "2",
      imagen: "/notebook2.png",
      category: "Notebook",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 8GB | SSD: 256GB",
      quantity: 5,
    },
    {
      id: "3",
      imagen: "/airpods.png",
      category: "Airpods",
      model: "Airpod",
      description: "Wireless earbuds for Apple devices",
      quantity: 5,
    },
    {
      id: "4",
      imagen: "/keyboard.png",
      category: "Keyboard",
      model: "Magic Keyboard",
      description: "Apple's wireless keyboard",
      quantity: 5,
    },
  ];

  const info = [
    {
      serial: "#3248",
      name: "Braian",
      lastName: "Barrientos",
      status: "DELIVERED",
      actions: "Return",
    },
    {
      serial: "#3249",
      name: "Esteban Rodriguez",
      lastName: "Sucari",
      status: "MISSGING DATA",
      actions: "Assign To",
    },
    {
      serial: "#3250",
      name: "Agustin",
      lastName: "Sandoval",
      status: "PREPARING",
      actions: "Return",
    },
    {
      serial: "#3251",
      name: "Francisco",
      lastName: "Villanueva",
      status: "DELIVERED",
      actions: "Return",
    },
    {
      serial: "#3252",
      name: "Rafa",
      lastName: "Mojica",
      status: "AVAILABLE",
      actions: "Return",
    },
  ];

  const [rowOpenState, setRowOpenState] = useState(
    Array(data.length).fill(false)
  );

  const toggleRow = (index) => {
    const updatedRowOpenState = [...rowOpenState];
    updatedRowOpenState[index] = !updatedRowOpenState[index];
    setRowOpenState(updatedRowOpenState);
  };

  return (
    <table
      className={`flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Model</th>
          <th className="py-3 px-3">Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <Fragment key={item.id}>
            <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
              <td className="py-4 px-3 flex gap-2">
                <Image
                  src={item.imagen}
                  alt={item.category}
                  width={48}
                  height={48}
                />
                <span>{item.category}</span>
              </td>
              <td className="py-4 px-3">
                {item.model}
                <br />
                {item.description}
              </td>
              <td className="py-4 px-3">{item.quantity}</td>
              <td className="flex-col">
                <div>
                  <ButtonMyStock
                    body="Detail"
                    onClick={() => toggleRow(index)}
                  />
                </div>
              </td>
            </tr>
            {rowOpenState[index] && (
              <tr>
                <td colSpan="4">
                  <TableDetails details={info} openModal={openModal} />
                </td>
              </tr>
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
}
