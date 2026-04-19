import { supabase } from "../lib/supabase.js"
import jwt from "jsonwebtoken"
import { createAccessToken, createRefreshToken } from "./tokens.js";

export const loginUser = async (email: string, password: string) => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (error) throw error;

    const valid = password === data.password;
    if (!valid) throw new Error("Invalid credentials");

    const accessToken = createAccessToken(data.userId);
    const refreshToken = createRefreshToken(data.userId)

    return { accessToken, refreshToken }
}

export const refreshUserAccessToken = async (token: string) => {
    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_REFRESH_SECRET!
        ) as { userId: number };

        const newAccessToken = createAccessToken(payload.userId);

        return newAccessToken;
    }
    catch (e: any) {
        throw new Error(`Refresh failed: ${(e as Error).message}`);
    }
}