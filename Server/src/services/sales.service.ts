import { supabase } from "../lib/supabase.js"
import { getRangeStartAndEnd } from "./frequency.js";

export const getSalesDataByFrequency = async (range: "day" | "week" | "month") => {
    const { startOf, endOf } = getRangeStartAndEnd(range);

    const { data, error } = await supabase
        .from("sales")
        .select(`
         *,
         courses!inner (
            name
         )
        `)
        .gte("created_at", startOf.toISOString())
        .lte("created_at", endOf.toISOString());

    if (error) throw error;

    return data.map((s) => {
        return {
            ...s,
            course_name: s.courses?.name
        }
    });
}