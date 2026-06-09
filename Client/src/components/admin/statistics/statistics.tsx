import useActive from "../../../hooks/active-range";
import useStatistics from "../../../hooks/statistics";
import type { Frequency } from "../../../models/frequency";
import Graph from "./graph";

const Statistics = () => {
    const { about, salesData, switchAbout, chartData, rangeInNumbers } = useStatistics();
    const { active, handleClick } = useActive();
    const changeChartFrequency = (about: Frequency) => {
        switchAbout(about);
        handleClick(about)
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
            <button
                onClick={() => { changeChartFrequency("day") }}
                className={active === "day" ? "active-range" : ""}
            >יומי</button>
            <button
                onClick={() => { changeChartFrequency("week") }}
                className={active === "week" ? "active-range" : ""}
            >שבועי</button>
            <button
                onClick={() => { changeChartFrequency("month") }}
                className={active === "month" ? "active-range" : ""}
            >חודשי</button>
        </div>
    </>
}

export default Statistics;