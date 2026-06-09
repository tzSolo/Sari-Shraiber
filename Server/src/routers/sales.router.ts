import { Router } from "express";
import { getSales } from "../controllers/sales.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router();

router.get("/range",authMiddleware, getSales);

export default router;