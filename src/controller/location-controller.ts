import { locationService } from "@/service";
import { Request, Response } from "express";

export async function nearbyBusStation(req: Request, res: Response) {
  const { latitude, longitude } = req.body;

  try {
    const result = await locationService.getNearbyBusStation({ latitude, longitude });
    return res.status(200).send(result);
  } catch (error) {
    if (error.name === "BadRequestError") return res.sendStatus(400);
    return res.status(500).send({ error });
  }
}
