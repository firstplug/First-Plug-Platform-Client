"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
export function DoughnutChart({ className, data }) {
  const info = {
    labels: data.map((m) => m.name),
    datasets: [
      {
        label: "Sample Doughnut Chart",
        data: data.map((m) => m.count),
        backgroundColor: data.map((m) => m.color),
      },
    ],
  };

  return (
    <div className={`${className || ""} h-full `}>
      <Doughnut data={info} className="mx-auto" />
    </div>
  );
}
