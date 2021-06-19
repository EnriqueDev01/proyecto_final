import React from 'react'
import {Bar} from 'react-chartjs-2'

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: 'Atendidos',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(158, 158, 158, 0.5)',
        borderColor: 'rgba(158, 158, 158, 1)',
        borderWidth: 2,
      },
      {
        label: 'Confirmados',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgba(28, 188, 28, 0.5)',
        borderColor: 'rgba(28, 188, 28, 1)',
        borderWidth: 2,
      },
      {
        label: 'Pendientes',
        data: [3, 10, 13, 15, 22, 20],
        backgroundColor: 'rgba(248, 178, 28, 0.5)',
        borderColor: 'rgba(248, 178, 28, 1)',
        borderWidth: 2,
      },
      {
        label: 'Cancelados',
        data: [8, 11, 12, 17, 20, 24],
        backgroundColor: 'rgba(208, 28, 28, 0.5)',
        borderColor: 'rgba(208, 28, 28, 1)',
        borderWidth: 2,
      },
    ],
};
  
const options = {
    scales: {
        yAxes: [
            {ticks: {beginAtZero: true,},},
        ],
        xAxes: {grid: {display: false},stacked: true,},  
        yAxes: {grid: {display: false},stacked: true,},  
    },
  };

function BarWeek() {
    return (
        <div className="bg-white rounded" style={{width:'600px'}}>            
            <Bar data={data} options={options} />            
        </div>
    )
}

export default BarWeek
