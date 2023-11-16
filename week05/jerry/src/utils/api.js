import { API_KEY } from "./Moviedummy";

export const getFetchOption = (method = "GET") => {
  return {
    method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};