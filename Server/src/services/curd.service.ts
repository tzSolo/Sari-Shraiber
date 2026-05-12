import { supabase } from "../lib/supabase.js";


export const getAllEntities = async (tableName: string) => {
    const { data, error } = await supabase
        .from(tableName)
        .select("*");

    if (error) throw error;
    return data;
};

export const getEntityById = async (id: number, tableName: string) => {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .eq("id", `${id}`)
        .single();

    if (error) throw error;
    return data;
}

export const addEntity = async (entity: any, tableName: string) => {
    const { data, error } = await supabase
        .from(tableName)
        .insert(entity)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export const updateEntity = async (id: number, entity: any, tableName: string) => {
    const { error, data } = await supabase
        .from(tableName)
        .update(entity)
        .eq("id", `${id}`)
        .select()
        .single();

    if (error) throw error;
    return data;
}


export const deleteEntity = async (id: number, tableName: string): Promise<boolean> => {
    const { error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", `${id}`);

    return !error;
}