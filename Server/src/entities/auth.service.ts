import { supabase } from "../lib/supabase.js"
import jwt from "jsonwebtoken";

export const loginUser = async (email: string, password: string) => {
    const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();

    if (error) throw error;

    const valid = password === data.password;
    if (!valid) throw new Error("Invalid credentials");

    return jwt.sign(
        { userId: data.id },
        process.env.JWT_SECRET!,
        { expiresIn: "15m" }
    );
}