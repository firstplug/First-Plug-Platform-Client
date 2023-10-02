import React from "react";

export default function TableDetailsShipments({ className, quantity }) {
  const data = [
    {
      imagen: "/notebook1.png",
      category: "Notebook ",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 16GB | SSD: 512GB",
      quantity: 5,
      serial: "#00113",
    },
    {
      imagen: "/notebook2.png",
      category: "Notebook",
      model: "Macbook Pro 14",
      description: "CPU: M2 Pro | RAM: 8GB | SSD: 256GB",
      quantity: 5,
      serial: "#00343",
    },
    {
      imagen: "/airpods.png",
      category: "Airpods",
      model: "Airpod",
      description: "Wireless earbuds for Apple devices",
      quantity: 5,
      serial: "#00563",
    },
    {
      imagen: "/keyboard.png",
      category: "Keyboard",
      model: "Magic Keyboard",
      description: "Apple's wireless keyboard",
      quantity: 5,
      serial: "#00332",
    },
  ];
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
          <th className="py-3 px-3">Serial</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, quantity).map((item) => (
          <tr className="bg-white text-black border-b-2 border-gray-200 text-left">
            <td className="py-4 px-3 flex gap-2">
              <img
                src={item.imagen}
                alt={item.category}
                className="h-12 w-12"
              />
              <span>{item.category}</span>
            </td>
            <td className="py-4 px-3">
              {item.model}
              <br />
              {item.description}
            </td>
            <td className="py-4 px-3">{item.serial}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
