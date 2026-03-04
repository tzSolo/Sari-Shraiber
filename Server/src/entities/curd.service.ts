import { supabase } from "../lib/supabase.ts";
import type { Entity } from "./entity.model.ts";


export const getAllEntities = async (tableName: string): Promise<Entity[]> => {
    const { data, error } = await supabase
        .from(tableName)
        .select("*");

    if (error) throw error;
    return data as Entity[];
};

export const getEntityById = async (id: number, tableName: string): Promise<Entity | null> => {
    const { data, error } = await supabase
        .from(tableName)
        .select("*")
        .eq("id", id)
        .single();

    if (error) throw error;
    return data as Entity;
}

export const addEntity = async (entity: Entity, tableName: string): Promise<Entity> => {
    const { data, error } = await supabase
        .from(tableName)
        .insert(entity)
        .select()
        .single();

    if (error) throw error;
    return data as Entity;
}

export const updateEntity = async (id: number, entity: Entity, tableName: string): Promise<Entity> => {
    const { error, data } = await supabase
        .from(tableName)
        .update(entity)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data as Entity;
}


export const deleteEntity = async (id: number, tableName: string): Promise<boolean> => {
    const { error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", id);

    return !error;
}