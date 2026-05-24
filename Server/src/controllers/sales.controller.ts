import { Request, Response } from "express";
import { getSalesDataByFrequency } from "../services/sales.service.js";

export const getSales = async (req: Request, res: Response) => {
    try {
        const range = req.query.range as string;
        if (!["day", "week", "month"].includes(range)) {
            throw new Error("Range is not valid.");
        }

        const sales = await getSalesDataByFrequency(range as "day" | "week" | "month");
        return res.json(sales);
    }
    catch (e: any) {
        return res.status(400).json(e);
    }
}