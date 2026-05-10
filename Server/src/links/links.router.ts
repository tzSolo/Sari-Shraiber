import { Router } from "express";
import { getLinks } from "./links.controller.js";

const router = Router();

router.use("navigation", getLinks);

export default router;