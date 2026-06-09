import { Router } from "express";
import { getAll, getById, add, update, deleteE } from "../controllers/curd.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router({ mergeParams: true });

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", authMiddleware, add);
router.put("/:id", authMiddleware, update);
router.delete("/:id", authMiddleware, deleteE);

export default router;