import express, { Request, Response, type Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import entityRouter from "./entities/curd.router.js";
import loginRouter from "./auth/auth.router.js";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3000;
const app: Application = express();

app.use(cors({
  origin: ["http://localhost:5173",
    "https://sari-shraiber.onrender.com"
  ],
  credentials: true
}));

app.use(express.json());

app.get("/awake", (req: Request, res: Response) => {
  res.json({ message: "Server running." });
})
app.use("/api/entities/:entity", entityRouter);
app.use("/api/auth", loginRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});