"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function DoughnutChart({ className, data }) {
  const info = {
    labels: ["Assigned", "Avaliable"],
    color: "white",
    datasets: [
      {
        data: [data.assigned, data.avaliable],
        backgroundColor: ["#9747FF", "#4FE8B7"],
        hoverBackgroundColor: ["#fff"],
        border: "none",
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

  const options = {
    plugins: {
      legend: legendOptions,
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.label + ": " + context.parsed + " units";
          },
        },
      },
    },
  };

  return (
    <figure
      className={`relative mx-auto flex flex-col items-center  cursor-pointer ${
        className || ""
      } h-full`}
    >
      <Doughnut data={info} options={options} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-dark-grey font-medium">Total</span>
          <span className="font-bold text-2xl">
            {data.assigned + data.avaliable}
          </span>
        </div>
      </div>
      <figcaption className="flex gap-2 w-full justify-center">
        <div className="flex gap-1 items-center">
          <div className="h-[1rem] w-[1rem] bg-purple rounded-full"></div>
          <p>
            Assigned | <b> {data.assigned} </b>
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <div className="h-[1rem] w-[1rem] bg-green rounded-full"></div>
          <p>
            Avaliable | <b> {data.avaliable} </b>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
