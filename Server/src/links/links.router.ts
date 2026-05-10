import { Router } from "express";
import { getLinks } from "./links.controller.js";

const router = Router();

router.get("/navigation", getLinks);

export default router;