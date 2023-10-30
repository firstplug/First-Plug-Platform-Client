"use client";
import React, { useState, useEffect } from "react";
import DoughnutChart from "@/common/Graphs";
import { MonitorIcon, DeviceTablet, PencilAccesories } from "@/common/Icons";
import { useStore } from "@/models/root.store";
import { observer } from "mobx-react-lite";

type classNameProps = {
  className?: string,
}

export default observer(function StockCard({ className } : classNameProps) {
  const store = useStore();

  const groupedProducts = store.products?.reduce((result, product) => {
    if (!result[product.category]) {
      result[product.category] = product;
    }
    return result;
  }, {});

  const uniqueProducts = Object.values(groupedProducts);

  

  const [info, setInfo] = useState({ ...store.products[0] } || {});

  return (
    <div className={`flex justify-around  ${className || ""} `}>
      <div className="  h-100 flex flex-col justify-between  w-full">
        {uniqueProducts.map((equipment) => (
          <div
            key={equipment._id}
            className={` w-full flex gap-2  font-medium cursor-pointer p-2 rounded-md hover:bg-light-grey ${
              info && info === equipment.category
                ? "text-blue bg-light-grey"
                : "bg-none"
            } `}
            onClick={() => setInfo(equipment)}
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
});
