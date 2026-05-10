import { supabase } from "../lib/supabase.js"

export const getLinksByRoleId = async (roleId: number) => {
    const { data, error } = await supabase
        .from("role_links")
        .select(`
        links(
        path,
        text
        )
        `)
        .eq('role_id', roleId);

    if (error) throw new Error(error.message);

    return data;
}