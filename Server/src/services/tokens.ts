import jwt from "jsonwebtoken";

export const createAccessToken = (userId: number) => {
    return jwt.sign(
        { userId },
        process.env.JWT_SECRET!,
        { expiresIn: "15m" }
    );
};

export const createRefreshToken = (userId: number) => {
    return jwt.sign(
        { userId },
        process.env.JWT_REFRESH_SECRET!,
        { expiresIn: "7d" }
    );
};