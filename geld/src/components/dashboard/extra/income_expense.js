"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
export default function IncomeExpense1() {
  return (
    <div className="w-[588px] h-[284px] rounded-[12px] flex flex-col bg-white">
      <header className="flex flex-row w-full h-[56px] px-[24px] py-[16px] justify-between">
        <h1>Income - Expense</h1>
      </header>
      <hr></hr>
      <main className="w-full h-full px-5 flex items-center justify-center">
        <div className="w-[450px] h-[250px]">
          <Bar options={options} data={data} />
        </div>
      </main>
    </div>
  );
}
