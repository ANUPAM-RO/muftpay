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


const AreaChart = ({result}) => {

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: "User",
        data: [result?.[0]?.data?.length , result?.[1]?.data?.length , result?.[2]?.data?.length , result?.[3]?.data?.length, result?.[4]?.data?.length , result?.[6]?.data?.length , result?.[3]?.data?.length],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  const componentPdf = useRef();
    const generatePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "KycData",
    onAfterPrint:()=>alert("Data saved in pdf")
  })

  return (
    <div
      className="border border-gray-300 p-4 rounded-2xl"
      style={{ width: "100%" }}
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
          <Line data={data}  style={{ height: "45vh", width: "70vw" }} />
      </div>
    
    </div>
  );
};

export default AreaChart;
