"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, ChartOptions } from "chart.js";
Chart.register(ArcElement);

interface DoughnutChartProps {
  className?: string;
  data: {
    quantity?: number;
    stock?: number
  };
}

export function DoughnutChart({ className, data }: DoughnutChartProps) {
  const stock = data.stock || 0;
  //TODO: check this, where are assigned and available values?
  const quantity = data.quantity || 20;
  
  const assignedColor = "#9747FF"; 
  const availableColor = "#4FE8B7";

  const info = {
    labels: ["Assigned", "Available"],
    datasets: [
      {
        data: [quantity, stock],
        backgroundColor: [assignedColor, availableColor],
        hoverBackgroundColor: ["#fff", "#fff"],
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 15,
          usePointStyle: true,
        },
      },
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
          <span className="font-bold text-2xl">{quantity + stock}</span>
        </div>
      </div>
      <figcaption className="flex gap-2 w-full justify-center">
        <div className="flex gap-1 items-center pt-8">
          <div className="h-[1rem] w-[1rem]" style={{ backgroundColor: assignedColor }}></div>
          <p>
            Assigned | <b> {quantity +20} </b>
          </p>
        </div>
        <div className="flex gap-1 items-center pt-8">
          <div className="h-[1rem] w-[1rem]" style={{ backgroundColor: availableColor }}></div>
          <p>
            Available | <b> {stock} </b>
          </p>
        </div>
      </figcaption>
    </figure>
  );
}