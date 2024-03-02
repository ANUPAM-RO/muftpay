import React from 'react';
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
} from 'chart.js';
import { Line } from 'react-chartjs-2';


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


const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: [103, 53, 85, 41, 44, 65, 41],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const AreaChart = () => {
  return (
      <div className='border border-gray-300 p-4 rounded-2xl' style={{ width: "800px"}} >
           <div className=" flex justify-between text-xl pb-4 font-bold" style={{ color: "#222222" }}>
        <p>User Engagement</p>
        <div className='flex gap-2'>
          <p style={{ color: "#2497E7" }}>Export</p>
          <img src="./Share (1).svg" alt="" />
        </div>
      </div>
     <Line data={data} style={{ height: "400px", width: "740px" }}/> 
    </div>
  )
}

export default AreaChart
