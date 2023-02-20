import { ApplicationError } from "@/types";

export function badRequestError(): ApplicationError {
  return {
    name: "BadRequestError",
    message: "Bad request!",
  };
}
