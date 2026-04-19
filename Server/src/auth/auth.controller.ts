import { Request, Response } from "express";
import { loginUser, refreshUserAccessToken } from "./auth.service.js"

export const login = async (req: Request, res: Response) => {
    try {
        const { accessToken, refreshToken } = await loginUser(req.body.email, req.body.password);
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24 * 7
        })
        return res.json({ accessToken });
    }
    catch (e: any) {
        return res.status(401).json({
            message: e.message || "Authentication failed"
        });
    }
}

export const refreshAccessToken = async (req: Request, res: Response) => {
    try {
        const token = req.body.refreshToken;

        if (!token) {
            return res.status(400).json({
                message: "Refresh token required"
            });
        }

        const newAccessToken = await refreshUserAccessToken(token);
        return res.json({ accessToken: newAccessToken });
    }
    catch (e: any) {
        return res.status(401).json({
            message: "Invalid refresh token"
        });
    }
}