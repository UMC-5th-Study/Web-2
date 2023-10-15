import { API_KEY } from "./constants";

export const getFetchOption = (method = "GET") => {
  return {
    method,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };
};
