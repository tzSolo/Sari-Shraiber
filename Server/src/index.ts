import express, { type Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import entityRouter from "./entities/curd.router.js";
import loginRouter from "./auth/auth.router.js";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();

app.use(cors({
  origin: "*" 
}));

app.use(express.json());

app.use("/api/entities/:entity", entityRouter);
app.use("/api/auth", loginRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});