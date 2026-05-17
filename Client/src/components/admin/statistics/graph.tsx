import { useEffect, useState } from "react";
import type { Sale } from "../../../models/sale";
import Chart from "./chart";
import type { Frequency } from "../../../models/frequency";

const Graph = (graphData: { about: Frequency, sales: Sale[], chartData: any, rangeInNumbers: any }) => {
    const { about, sales, chartData, rangeInNumbers } = graphData;
    const [xLabels, setXLabels] = useState<number[]>([]);
    const [xData, setXData] = useState<number[]>([]);
    const [courseName, setCourseName] = useState<string>("");

    const getGraphLabels = () => {
        setCourseName(sales[0].course_name);
        setXLabels(rangeInNumbers());
        setXData(chartData(sales));
    }

    useEffect(() => {
        getGraphLabels();
    }, [about, sales])

    return <>
        <Chart {...{ xLabels, xData, courseName }} />
    </>
}

export default Graph;