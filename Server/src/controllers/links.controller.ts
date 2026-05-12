import { Request, Response } from "express";
import { getLinksByRoleId } from "../services/links.service.js";

export const getLinks = async (req: Request, res: Response) => {
    try {
        const links = await getLinksByRoleId(Number(req.params.roleId));
        return res.json(links);
    }
    catch (e: any) {
       return res.status(500).json(e);
    }
}