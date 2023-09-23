import React from "react";
import { DoughnutChart } from "@/common/Graphs";
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
  { name: "Accesories", count: 2, color: "#1b3c47" },
  { name: "Monitor", count: 2, color: "#8597ff" },
  { name: "Headset", count: 6, color: "#e58999" },
  { name: "Merch", count: 6, color: "#4e4843" },
  { name: "Laptop", count: 1, color: "#b7af6c" },
  { name: "Chair", count: 0, color: "#7f4328" },
];
export default function StockCard({ className }) {
  return (
    <div className={`flex justify-around  ${className || ""} `}>
      <div className="  h-100 flex flex-col justify-between ">
        {data.map((m) => (
          <div className="flex  gap-2 items-center">
            <div
              className={`h-[1rem] w-[1rem]  rounded-full`}
              style={{ background: m.color }}
            ></div>
            <b className=" text-dark-grey">{m.name}</b>
          </div>
        ))}
      </div>
      <div>
        <DoughnutChart data={data} className={" h-[15rem]"} />
      </div>
    </div>
  );
}
