import { Router } from "express";
import entityRouter from "./entities/curd.router.js";
import loginRouter from "./auth/auth.router.js";

const apiRouter = Router();

apiRouter.use("/api/entities/:entity", entityRouter);
apiRouter.use("/api/auth", loginRouter);

export default apiRouter;