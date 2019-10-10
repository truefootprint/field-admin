import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const token = localStorage.getItem("token");

  if (token) {
    options.headers.set("Authorization", `Basic ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export default httpClient;
