import React from 'react';
import { Box } from '@chakra-ui/layout'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from "react-chartjs-2";
// import ReactApexChart from "react-apexcharts";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)
export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
            borderRadius: 8,
        },
    },
    responsive: true,
    plugins: {
        }
};
const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];

export  const data = {
    labels,
    datasets: [
        {
            data: [15000, 25000, 35000, 40000, 30000],
            backgroundColor: 'black'
        }
    ]
};

const Charts = (props) => (
       <Box>
           <Bar options={options} data={data} />
       </Box>
);
export default Charts;

