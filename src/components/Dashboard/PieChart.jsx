import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);;


export const data = {
  labels: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 12, 12],
      backgroundColor: [
        '#2497E7',
        '#9747FF',
        '#E724A4',
      ],
      borderColor: [
        '#2497E7',
        '#9747FF',
        '#E724A4',

      ],
      borderWidth: 1,
    },
  ],
};


const PieChart = ({title , amount}) => {
  return (
    <div className='border border-gray-300 p-4 rounded-2xl' >
      <div className=" flex justify-between text-xl pb-4 font-bold" style={{ color: "#222222" }}>
        <p>{title}</p>
        <p>{amount}</p>
      </div>
   
      <Doughnut  data={data} style={{height:"200px" , width: "250px"}} />
    </div>

  )
}

export default PieChart

