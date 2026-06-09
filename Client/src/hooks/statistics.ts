import { useContext, useEffect, useState } from "react";
import type { Frequency } from "../models/frequency";
import type { Sale } from "../models/sale";
import { userContext } from "../context/userContext";

const baseUrl = import.meta.env.VITE_BASE_URL;

const useStatistics = () => {
    const [about, setAbout] = useState<Frequency>("week");
    const [salesData, setSalesData] = useState<Sale[][]>();
    const { user } = useContext(userContext);
    const { token } = user;

    const getSalesData = async (freq: Frequency) => {
        try {
            const response = await fetch(`${baseUrl}/sales/range?range=${freq}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

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

    const switchAbout = (newAbout: Frequency) => {
        if (about === newAbout) return;

        setAbout(newAbout);
    }

    const chartData = (sales: Sale[]) => {
        const length = countRange();
        const res = new Array(length).fill(0);

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

    const countRange = () => {
        switch (about) {
            case "day": {
                return 24;
            }
            case "week": {
                return 7;
            }
            case "month": {
                const now = new Date();
                const year = now.getFullYear();
                const month = now.getMonth();
                const daysInMonth = new Date(year, month + 1, 0).getDate();

                return daysInMonth;
            }
        }
    }

    const rangeInNumbers = () => {
        return range(countRange());
    }

    useEffect(() => {
        getSalesData(about);
    }, [about])

    return { about, salesData, switchAbout, chartData, rangeInNumbers }
}

export default useStatistics;