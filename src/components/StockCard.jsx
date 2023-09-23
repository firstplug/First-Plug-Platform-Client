"use client";
import React, { useEffect, useState } from "react";
import { DoughnutChart } from "@/common/Graphs";
import Button from "@/common/Button";
export function MouseIcon({ className }) {}
export function MonitorIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
      />
    </svg>
  );
}
export function MerchIcon({ className }) {}
export function HeadsetIcon({ className }) {}
export function ChaiIcon({ className }) {}
export function AccesoriesIcon({ className }) {}

const data = [
  {
    name: "Accesories",
    assigned: 15,
    avaliable: 18,
    color: "#1b3c47",
    icon: <MonitorIcon />,
  },
  {
    name: "Monitor",
    assigned: 15,
    avaliable: 4,
    color: "#8597ff",
    icon: <MonitorIcon />,
  },
  {
    name: "Headset",
    assigned: 30,
    avaliable: 40,
    color: "#e58999",
    icon: <MonitorIcon />,
  },
  {
    name: "Merch",
    assigned: 90,
    avaliable: 20,
    color: "#4e4843",
    icon: <MonitorIcon />,
  },
  {
    name: "Laptop",
    assigned: 70,
    avaliable: 40,
    color: "#b7af6c",
    icon: <MonitorIcon />,
  },
  {
    name: "Chair",
    assigned: 20,
    avaliable: 5,
    color: "#7f4328",
    icon: <MonitorIcon />,
  },
];
export default function StockCard({ className }) {
  const [info, setInfo] = useState(data[0]);

  const handleSetInfo = (e) => {
    setInfo(e);
  };
  return (
    <div className={`flex justify-around  ${className || ""} `}>
      <div className="  h-100 flex flex-col justify-between  w-full">
        {data.map((m) => (
          <div
            className={` w-full flex gap-2  font-medium cursor-pointer p-2 rounded-md hover:bg-light-grey ${
              info.name === m.name
                ? "text-blue bg-light-grey"
                : "text-dark-grey"
            } `}
            onClick={() => handleSetInfo(m)}
          >
            {m.icon}
            {m.name}
          </div>
        ))}
      </div>
      <div className="w-full">
        <DoughnutChart data={info} className={" max-h-[15rem]"} />
      </div>
    </div>
  );
}
