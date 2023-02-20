import { nearbyBusStation } from "@/controller";
import { Router } from "express";

const locationRouter = Router();

locationRouter.post("/", nearbyBusStation);

export { locationRouter };
