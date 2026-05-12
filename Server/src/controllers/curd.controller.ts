import type { Request, Response } from "express";
import { getAllEntities, getEntityById, addEntity, updateEntity, deleteEntity } from "../services/curd.service.js"


const getTable = (req: Request) => {
    const name = req.params.entity;

        if (!name) {
        throw new Error("Missing entity param");
    }

    return name.toString();
};

export const getAll = async (req: Request, res: Response) => {
    try {
        const entities = await getAllEntities(getTable(req));
        return res.json(entities);
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const entity = await getEntityById(Number(req.params.id), getTable(req));
        return res.json(entity);
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        const newEntity = await addEntity(req.body, getTable(req));
        return res.json(newEntity);
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const updatedEntity = await updateEntity(Number(req.params.id), req.body, getTable(req));
        return res.json(updatedEntity);
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}

export const deleteE = async (req: Request, res: Response) => {
    try {
        const isDeletedEntity = await deleteEntity(Number(req.params.id), getTable(req));
        return res.json(isDeletedEntity);
    }
    catch (e: any) {
        return res.status(500).json(e);
    }
}