import { useEffect, useState } from "react";
import type { Frequency } from "../models/frequency";
import type { Sale } from "../models/sale";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useStatistics = () => {
    const [about, setAbout] = useState<Frequency>("week");
    const [salesData, setSalesData] = useState<Sale[][]>();

    const getSalesData = async (freq: Frequency) => {
        try {
            const response = await fetch(`${baseUrl}/sales/range?about=${freq}`);

            if (!response.ok) {
                throw new Error("Cannot get sales data");
            }

            const result = await response.json();

            const salesByCourse = sliceDataByCourse(result);
            console.log(salesByCourse);

            setSalesData(salesByCourse);
        }
        catch (e: any) {
            console.error(e.message);
        }
    }

    const sliceDataByCourse = (sales: Sale[]) => {
        const sortedSales = [...sales].sort((s1, s2) => s1.course_id - s2.course_id);

        let current = { CId: sortedSales[0].course_id, index: 0 };
        let coursesSales: Sale[][] = [[]];

        for (let i = 0; i < sortedSales.length; i++) {
            if (current.CId === sortedSales[i].course_id) {
                coursesSales[current.index].push(sortedSales[i]);
            }
            else {
                current.CId = sortedSales[i].course_id;
                current.index++;
                coursesSales[current.index] = [sortedSales[i]];
            }
        }
        return coursesSales;
    }

    const swichAbout = (newAbout: Frequency) => {
        if (about === newAbout) return;

        setAbout(newAbout);
        getSalesData(newAbout);
    }

    useEffect(() => {
        getSalesData(about);
    }, [])

    return { salesData, swichAbout }
}

export default useStatistics;