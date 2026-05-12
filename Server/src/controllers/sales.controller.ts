import { Request, Response } from "express";
import { getSalesDataByFrequency } from "../services/sales.service.js";

export const getSales = async (req: Request, res: Response) => {
    try {
        const range = req.query.about;
        if (range !== "day" && range !== "week" && range !== "month") {
            throw new Error("Range is not valid.");
        }

        const sales = await getSalesDataByFrequency(range);
        return res.json(sales);
    }
    catch (e: any) {
        return res.status(400).json(e);
    }
}