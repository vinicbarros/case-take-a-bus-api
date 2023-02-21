import app, { init } from "@/app";
import httpStatus from "http-status";
import supertest from "supertest";

beforeAll(async () => {
  await init();
});

const server = supertest(app);

describe("POST /location", () => {
  it("should respond with status 400 when body is not given", async () => {
    const response = await server.post("/location");

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
  it("should respond with status 400 when body is not valid", async () => {
    const invalidBody = { wrong: "body" };

    const response = await server.post("/location").send(invalidBody);

    expect(response.status).toBe(httpStatus.BAD_REQUEST);
  });
  describe("when body is valid", () => {
    it("should respond with status 200", async () => {
      const body = {
        latitude: 40.6156599,
        longitude: -73.7295763,
      };

      const response = await server.post("/location").send(body);

      expect(response.status).toBe(httpStatus.OK);
    });
    it("should respond with nearby bus station data", async () => {
      const body = {
        latitude: 40.6156599,
        longitude: -73.7295763,
      };

      const response = await server.post("/location").send(body);

      expect(response.body).toBeDefined();
    });
  });
});
