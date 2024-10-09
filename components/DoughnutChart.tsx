"use client"

import { Chart as ChartJs, ArcElement, Tooltip } from "chart.js"
import { Doughnut } from 'react-chartjs-2';

ChartJs.register(ArcElement, Tooltip)

const DoughnutChart = ({ accounts } : DoughnutChartProps) => {
  const data = {
    datasets: [
        {
            label: "Bank",
            data: [1250, 2500, 3750],
            backgroundColor: ["#FFEDE8", "#FCBBA9", "#FF6A3E"],
        }
    ],
    labels: ['Bank 1', 'Banl 2', 'Bank 3']
  }
  
    return (
    <Doughnut 
        data={data}
        options={
            {
                cutout: '70%'
            }
        }
     />
    )
};

export default DoughnutChart;
