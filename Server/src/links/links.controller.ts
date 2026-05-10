import { Request, Response } from "express";
import { getLinksByRoleId } from "./links.service.js";

export const getLinks = async (req: Request, res: Response) => {
    try {
        const links = await getLinksByRoleId(req.body.role_id);
        return res.json(links);
    }
    catch (e: any) {
        console.error(e.message);
    }
}