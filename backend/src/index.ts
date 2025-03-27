import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import indexRouter from "./routes/indexRouter";
import connectDB from "./db/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());

app.use("/api", limiter);

app.use("/api/v1", indexRouter);

connectDB();

app.get("/healthy", (req, res) => {
  res.send("I am healthy");
});

app.listen(PORT, () => {
  console.log("Server is running");
});
