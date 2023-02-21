import { nearbyBusStation } from "@/controller";
import { validateBody } from "@/middleware";
import { locationBodySchema } from "@/schema/location-schema";
import { Router } from "express";

const locationRouter = Router();

locationRouter.post("/", validateBody(locationBodySchema), nearbyBusStation);

export { locationRouter };
