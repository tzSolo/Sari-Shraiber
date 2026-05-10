import { Router } from "express";
import entityRouter from "./entities/curd.router.js";
import loginRouter from "./auth/auth.router.js";
import navigationRouter from "./links/links.router.js"

const apiRouter = Router();

apiRouter.use("/entities/:entity", entityRouter);
apiRouter.use("/auth", loginRouter);
apiRouter.use("/me", navigationRouter);

export default apiRouter;