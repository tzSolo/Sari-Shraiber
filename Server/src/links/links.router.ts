import { Router } from "express";
import { getLinks } from "./links.controller.js";

const router = Router();

router.get("/navigation/:roleId", getLinks);

export default router;