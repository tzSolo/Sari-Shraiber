import { Router } from "express";
import { getSales } from "../controllers/sales.controller.js";

const router = Router();

router.get("/range", getSales);

export default router;