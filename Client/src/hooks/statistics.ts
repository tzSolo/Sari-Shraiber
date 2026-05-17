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

            setSalesData(salesByCourse);
        }
        catch (e: any) {
            console.error(e.message);
        }
    }

    const sliceDataByCourse = (sales: Sale[]) => {
        const map = new Map<number, Sale[]>();
        for (const sale of sales) {
            const key = Number(sale.course_id);
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)!.push(sale);
        }

        return [...map.values()].sort((s1, s2) => s1[0].serial_num - s2[0].serial_num);
    }

    const swichAbout = (newAbout: Frequency) => {
        if (about === newAbout) return;

        setAbout(newAbout);
    }

    const chartData = (sales: Sale[]) => {
        const labels = rangeInNumbers();
        const res = new Array(labels.length).fill(0);

        sales.forEach((sale) => {
            let time = new Date(sale.created_at);
            const index = about === "day" ?
                time.getHours() :
                about === "week" ?
                    time.getDay() : time.getDate() - 1;
            res[index]++;
        })

        return res;
    }

    const range = (num: number) => Array.from({ length: num }, (_, i) => i);

    const rangeInNumbers = () => {
        switch (about) {
            case "day": {
                return range(24);
            }
            case "week": {
                return range(7)
            }
            case "month": {
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth();
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                return range(daysInMonth);
            }
        }
    }

    useEffect(() => {
        getSalesData(about);
    }, [about])

    return { about, salesData, swichAbout, chartData, rangeInNumbers }
}

export default useStatistics;