import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useReactToPrint } from "react-to-print";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [103, 73, 85, 66, 70, 95, 78],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};



const AreaChart = () => {
  const componentPdf = useRef();
    const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint:()=>alert("Data saved in pdf")
  })

  return (
    <div
      className="border border-gray-300 p-4 rounded-2xl"
      style={{ width: "800px" }}
    >
      <div
        className=" flex justify-between text-xl pb-4"
        style={{ color: "#222222" }}
      >
        <p className="text-2xl font-bold">User Engagement</p>
        <div className="flex gap-2 cursor-pointer" onClick={generatePDF}>
          <p style={{ color: "#2497E7" }}>Export</p>
          <img src="./Share (1).svg" alt="" />
        </div>
      </div>
      <div ref={componentPdf} >
          <Line data={data} style={{ height: "400px", width: "740px" }} />
      </div>
    
    </div>
  );
};

export default AreaChart;
