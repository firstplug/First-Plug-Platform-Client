"use client";
import { useState, Fragment, useEffect } from "react";
import TableDetails from "./TableDetails";
import ButtonMyStock from "@/common/ButtonMyStock";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import defaultPhoto from "../../public/Isotipo.png";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";
import { ProductServices } from "@/services/product.services";

export default observer(function Table({ className }) {
  const { openModal } = useModal();
  const { products } = useStore();

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
    Array(products.products.length).fill(false)
  );

  const toggleRow = (index) => {
    const updatedRowOpenState = [...rowOpenState];
    updatedRowOpenState[index] = !updatedRowOpenState[index];
    setRowOpenState(updatedRowOpenState);
  };

  return (
    <table className={`flex-col w-full  ${className || ""}  `}>
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3">Category</th>
          <th className="py-3 px-3">Model</th>
          <th className="py-3 px-3">Quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.products?.map((product, index) => (
          <Fragment key={product._id}>
            <tr className="bg-white text-black border-b-2 border-gray-200 text-left h-[6rem] ">
              <td className="py-4 px-3 flex gap-9 items-center">
                <Image
                  src={product.imgUrl ? product.imgUrl : defaultPhoto}
                  alt={product.category}
                  width={48}
                  height={48}
                />
                <span>{product.category}</span>
              </td>
              <td className="py-4 px-3 items-center">
                {product.model}
                <br />
                {product.description}{" "}
              </td>
              <td className="py-4 px-3 items-center">{product.quantity}</td>
              <td className="flex-col items-center">
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
});
