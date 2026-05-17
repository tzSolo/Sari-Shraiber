import useStatistics from "../../../hooks/statistics";
import type { Frequency } from "../../../models/frequency";
import Graph from "./graph";

const Statistics = () => {
    const { about, salesData, swichAbout, chartData, rangeInNumbers } = useStatistics();

    const changeChartFrequency = (about: Frequency) => {
        swichAbout(about);
    }

    return <>
        <ul className="charts-container">
            {salesData && salesData.map((sales, index) => {                
                return <li key={index}>
                    <Graph {...{ about, sales, chartData, rangeInNumbers }} />
                </li>
            })}
        </ul>
        <div className="fr-buttons">
            <h2>מציג גרף :</h2>
            <button onClick={() => { changeChartFrequency("day") }}>יומי</button>
            <button onClick={() => { changeChartFrequency("week") }}>שבועי</button>
            <button onClick={() => { changeChartFrequency("month") }}>חודשי</button>
        </div>
    </>
}

export default Statistics;