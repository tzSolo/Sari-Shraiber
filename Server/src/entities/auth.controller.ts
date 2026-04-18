import { Request, Response } from "express";
import { loginUser } from "./auth.service.js"

export const login = async (req: Request, res: Response) => {
    try {
        const token = await loginUser(req.body.email, req.body.password);
        return res.json({ token });
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}