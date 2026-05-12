import { Router } from "express";
import entityRouter from "./curd.router.js";
import loginRouter from "./auth.router.js";
import navigationRouter from "./links.router.js"
import salesRouter from "./sales.router.js"

const apiRouter = Router();

apiRouter.use("/entities/:entity", entityRouter);
apiRouter.use("/sales", salesRouter)
apiRouter.use("/auth", loginRouter);
apiRouter.use("/me", navigationRouter);

export default apiRouter;