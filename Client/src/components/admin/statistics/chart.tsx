import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = (chartData: { xLabels: number[], xData: number[], courseName: string }) => {
    const { xLabels, xData, courseName } = chartData;
    const data = {
        labels: xLabels,
        datasets: [
            {
                data: xData,
                borderColor: "rgb(188 162 53)",
                backgroundColor: "rgb(188 162 53)",
                tension: 0.3,
                fill: false,
            }
        ],
    };

    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: courseName,
            },
            tooltip: {
                enabled: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: `${xLabels.length === 24 ? 'שעה' : 'יום'}`
                },
                ticks: {
                    autoSkip: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: "קניות",
                },
                beginAtZero: true,
                ticks: {
                    stepSize: 1
                },
            },
        },
    };

    return <>
        <div className="chart">
            <Line data={data} options={options} />
        </div>
    </>
}

export default Chart;