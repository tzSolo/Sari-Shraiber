import express, { type Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import entityRouter from "./entities/curd.router.js";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();

app.use(cors({
  origin: "*" 
}));

app.use(express.json());
app.use("/buyers", entityRouter);
app.use("/courses", entityRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});