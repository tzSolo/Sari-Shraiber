import express, { Request, Response, type Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import apiRouter from "./api.router.js";

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

app.get("/api/awake", (req: Request, res: Response) => {
  res.json({ message: "Server running." });
})

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});