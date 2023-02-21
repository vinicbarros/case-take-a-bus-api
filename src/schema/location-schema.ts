import { ILocationParams } from "@/types";
import Joi from "joi";

export const locationBodySchema = Joi.object<ILocationParams>({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});
