import { badRequestError } from "@/error";
import { ILocationParams, ResultNearbyStationType } from "@/types";
import axios from "axios";

export async function requestNearbyBusStation({
  latitude,
  longitude,
}: ILocationParams): Promise<ResultNearbyStationType[]> {
  const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";

  const searchUrl = `${url}location=${latitude},${longitude}&radius=600&keyword=bus+station&key=${process.env.GOOGLE_API_KEY}`;

  const result = await axios.get(searchUrl);

  if (result.data.status === "INVALID_REQUEST") {
    throw badRequestError();
  }
  return result.data.results as ResultNearbyStationType[];
}
