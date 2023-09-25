"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
export function DoughnutChart({ className, data }) {
  const info = {
    labels: ["Assigned", "Avaliable"],
    datasets: [
      {
        label: ["lan", "alasd"],
        data: [data.assigned, data.avaliable],
        backgroundColor: ["#9747FF", "#4FE8B7"],
      },
    ],
  };

  const legendOptions = {
    position: "bottom",
    align: "center",
    labels: {
      boxWidth: 15,
      usePointStyle: true,
    },
  };
  return (
    <div
      className={`relative mx-auto flex flex-col items-center ${
        className || ""
      } h-full`}
    >
      <Doughnut data={info} options={{ plugins: { legend: legendOptions } }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-dark-grey font-medium">Total</span>
          <span className="font-bold text-2xl">
            {data.assigned + data.avaliable}
          </span>
        </div>
      </div>
      <div className="flex gap-2 w-full justify-center">
        <div className="flex gap-1 items-center">
          <div className="h-[1rem] w-[1rem] bg-purple  rounded-full"></div>
          <p>Assigned</p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-[1rem] w-[1rem] bg-green  rounded-full"></div>
          <p>Avaliable</p>
        </div>
      </div>
    </div>
  );
}
