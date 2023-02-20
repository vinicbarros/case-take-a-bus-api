import { requestNearbyBusStation } from "@/utils/requestNearbyBusStation";
import { ILocationParams } from "@/types";

async function getNearbyBusStation({ latitude, longitude }: ILocationParams) {
  const busStation = await requestNearbyBusStation({ latitude, longitude });

  return busStation;
}

const locationService = {
  getNearbyBusStation,
};

export { locationService };
