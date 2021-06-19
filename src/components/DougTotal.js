import React from 'react'
import { Doughnut } from 'react-chartjs-2';

// const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','xxxx', 'yyyyy'],
//     datasets: [
//         {
//             // label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3, 5,6,8,4],
//             backgroundColor: [
//             'rgba(255, 99, 132, 0.4)',
//             'rgba(54, 162, 235, 0.4)',
//             'rgba(255, 206, 86, 0.4)',
//             'rgba(75, 192, 192, 0.4)',
//             'rgba(153, 102, 255, 0.4)',
//             'rgba(255, 159, 64, 0.4)',
//             'rgba(255, 255, 0, 0.4)', //yellow
//             'rgba(0, 255, 0, 0.4)', // lime
//             'rgba(0, 255, 255, 0.4)', // aqua
//             'rgba(0, 128, 128, 0.4)', // teal
//             ],
//             borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)',
//             'rgba(255, 255, 0, 1)',
//             'rgba(0, 255, 0, 1)',
//             'rgba(0, 255, 255, 1)', // aqua
//             'rgba(0, 128, 128, 1)', // teal
//             ],
//             borderWidth: 1,
//         },
//     ],
// };

// const options = {
//     plugins: {
//         legend: {
//             display: false,
//             labels: {
//                 color: 'rgb(255, 99, 132)',
//                 display: true
//             }
//         }
//     }
// };

function DougTotal({dataChart, labelsChart, titleChart, bgcolorChart}) {
    let backgroundColor = [
        'rgba(27, 79, 114, 0.4)',
        'rgba(33, 97, 140, 0.4)',
        'rgba(40, 116, 166, 0.4)',

        'rgba(46, 134, 193, 0.4)',
        'rgba(52, 152, 219, 0.4)',
        'rgba(93, 173, 226, 0.4)',

        'rgba(133, 193, 233, 0.4)',
        'rgba(174, 214, 241, 0.4)',
        'rgba(214, 234, 248, 0.4)',
        'rgba(235, 245, 251, 0.4)',
    ]
    let backgroundColorDS = bgcolorChart ? bgcolorChart : backgroundColor

    const data = {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','xxxx', 'yyyyy'],
        labels: labelsChart,
        datasets: [
            {
                label: '# of Votes',
                // data: [12, 19, 3, 5, 2, 3, 5,6,8,4],
                data: dataChart,
                backgroundColor : backgroundColorDS,
                // backgroundColor: [
                // 'rgba(255, 99, 132, 0.4)',
                // 'rgba(54, 162, 235, 0.4)',
                // 'rgba(255, 206, 86, 0.4)',
                // 'rgba(75, 192, 192, 0.4)',
                // 'rgba(153, 102, 255, 0.4)',
                // 'rgba(255, 159, 64, 0.4)',
                // 'rgba(255, 255, 0, 0.4)', //yellow
                // 'rgba(0, 255, 0, 0.4)', // lime
                // 'rgba(0, 255, 255, 0.4)', // aqua
                // 'rgba(0, 128, 128, 0.4)', // teal
                // ],
                // borderColor: [
                // 'rgba(255, 99, 132, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
                // 'rgba(255, 255, 0, 1)',
                // 'rgba(0, 255, 0, 1)',
                // 'rgba(0, 255, 255, 1)', // aqua
                // 'rgba(0, 128, 128, 1)', // teal
                // ],
                // borderWidth: 1,
            },
        ],
    };
    
    const options = {
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'rgb(255, 99, 132)',
                    display: true
                }
            },
            title: {
                display: true,
                text: titleChart
            }
        }
    };

    return (
        <div className="bg-white rounded px-2 pb-2 pt-0" style={{width:'200px'}}>          
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default DougTotal
