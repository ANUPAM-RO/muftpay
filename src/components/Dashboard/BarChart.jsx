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
      position: "top",
    },
  },
};

const labels = [2018, 2019, 2020, 2021, 2022, 2023, 2024];

export const data = {
  labels,
  datasets: [
    {
      label: "performance",
      data: [103, 53, 85, 41, 44, 65, 41],
      backgroundColor: "rgb(26, 206, 190)",
    },
  ],
};
const sortOptions = [
  { lable: 2023, value: 2023 },
  { lable: 2022, value: 2022 },
  { lable: 2021, value: 2021 },
  { lable: 2020, value: 2020 },
];
const BarChart = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-2xl">
      <div className="flex justify-between">
        <p className="text-2xl pb-6 font-bold" style={{ color: "#222222" }}>
          Recharge and Payment
        </p>
        <div>
          <select
            id="countries"
            style={{
              backgroundColor: "#F5F7FA",
              color: "#2497E7",
              border: "1px solid #2497E7",
            }}
            className="px-4 text-gray-900 text-sm rounded-md block w-28 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          >
            <option selected disabled>
              Year
            </option>
            {sortOptions?.map((data, i) => (
              <option key={i} value={data?.value}>
                {data?.lable}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Bar
        options={options}
        data={data}
        style={{ height: "300px", width: "400px" }}
      />
    </div>
  );
};

export default BarChart;
