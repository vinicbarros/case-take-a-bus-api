import "express-async-errors";
import express, { Express, json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { locationRouter } from "@/router";
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use("/location", locationRouter);

export async function init(): Promise<Express> {
  return Promise.resolve(app);
}

export default app;
