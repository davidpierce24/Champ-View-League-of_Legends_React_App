import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

// import RadarChart from 'react-svg-radar-chart';
// import 'react-svg-radar-chart/build/css/index.css';

const RadarChart = props => {

    const data = {
            labels: [
            'Attack',
            'Defense',
            'Magic',
            'Difficulty',
            ],
            datasets: [{
            label: 'Info',
            data: [props.attack, props.defense, props.magic, props.difficulty],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        };

        const options = {
            backgroundColor: 'white',
            borderColor: 'white',
            responsive: true,
            title: {
                display: true,
                text: "Info",
                fontSize: 20,
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            layout: {
                padding: 0
            },
            // maintainAspectRatio: false,
            scales: {
                    r:{
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        pointLabels: {
                            color: 'white',
                            font: {
                                size: 15
                            }
                        },
                        title: {
                            font: {
                                size: 32
                            }
                        },
                        ticks: {
                            backgroundColor: "transparent",
                            showLabelBackdrop: false,
                            stepSize: 2, 
                            color: 'white',
                            fontSize: 40
                        }, 
                        grid: {
                            color: '#CFCFCF'
                        }
                    }
                }
            }

        

    return (
        <div className=" w-70 xl:w-1/2 ">
            <div className=' rounded-xl w-full'>
                <Radar options={options} data={data} />
            </div>
        </div>
            
    )
}

export default RadarChart;