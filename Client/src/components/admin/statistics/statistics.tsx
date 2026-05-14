import useStatistics from "../../../hooks/statistics";
import type { Frequency } from "../../../models/frequency";
import Chart from "./chart";

const Statistics = () => {
    const { salesData, swichAbout } = useStatistics();

    const changeChartFrequency = (about: Frequency) => {
        swichAbout(about);
    }

    return <>
        <ul className="charts-container">
            {salesData && salesData.map((s, index) => {
                return <li key={index}>
                    <Chart sales={s} />
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