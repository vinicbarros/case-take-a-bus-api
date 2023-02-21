import { locationBodySchema } from "@/schema/location-schema";

describe("locationBodySchema", () => {
  describe("when latitude is not valid", () => {
    it("should return error if latitude is not present", () => {
      const body = {
        latitude: 40.6156599,
        longitude: -73.7295763,
      };
      delete body.latitude;

      const { error } = locationBodySchema.validate(body);

      expect(error).toBeDefined();
    });
  });
  describe("when longitude is not valid", () => {
    it("should return error if longitude is not present", () => {
      const body = {
        latitude: 40.6156599,
        longitude: -73.7295763,
      };
      delete body.longitude;

      const { error } = locationBodySchema.validate(body);

      expect(error).toBeDefined();
    });
  });

  it("should return no error if body is valid", () => {
    const body = {
      latitude: 40.6156599,
      longitude: -73.7295763,
    };

    const { error } = locationBodySchema.validate(body);

    expect(error).toBeUndefined();
  });
});
