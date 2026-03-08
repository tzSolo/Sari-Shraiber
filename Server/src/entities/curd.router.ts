import { Router } from "express";
import { getAll, getById, add, update, deleteE } from "./curd.controller.js";

const router = Router();

router.get("/",getAll);
router.get("/:id",getById);
router.post("/",add);
router.put("/:id",update);
router.delete("/:id",deleteE);

export default router;