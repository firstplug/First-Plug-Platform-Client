"use client";
import React, { useState, useEffect } from "react";
import DoughnutChart from "@/common/Graphs";
import { MonitorIcon, DeviceTablet, PencilAccesories } from "@/common/Icons";
import { useStore } from "@/models/products.store";

export default function StockCard({ className }) {
  const store = useStore();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    store.getAllProducts().then((data) => {
      setProductsData(data);
    });
  }, [store]);

  const groupedProducts = productsData.reduce((result, product) => {
    if (!result[product.category]) {
      result[product.category] = product;
    }
    return result;
  }, {});

  const uniqueProducts = Object.values(groupedProducts);

  const [info, setInfo] = useState(productsData[0]);

  const handleSetInfo = (e) => {
    setInfo(e);
  };

  return (
    <div className={`flex justify-around  ${className || ""} `}>
      <div className="  h-100 flex flex-col justify-between  w-full">
        {uniqueProducts.map((equipment) => (
          <div
            key={equipment._id}
            className={` w-full flex gap-2  font-medium cursor-pointer p-2 rounded-md hover:bg-light-grey ${
              info && info.name === equipment.name
                ? "text-blue bg-light-grey"
                : "bg-light-grey"
            } `}
            onClick={() => handleSetInfo(equipment)}
          >
            {equipment.category === "Notebook" ||
            equipment.category === "Escritorio" ? (
              <MonitorIcon />
            ) : equipment.category === "Accesorios" ? (
              <PencilAccesories />
            ) : (
              <DeviceTablet />
            )}
            {equipment.category}
          </div>
        ))}
      </div>
      <div className="w-full">
        <DoughnutChart data={info} className={" max-h-[15rem]"} />
      </div>
    </div>
  );
}
