import { fetchUtils } from "react-admin";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  const token = localStorage.getItem("token");
  const locale = localStorage.getItem("locale");

  if (token) {
    options.headers.set("Authorization", `Basic ${token}`);
  }

  if (locale) {
    options.headers.set("Accept-Language", locale);
  }

  return fetchUtils.fetchJson(url, options);
};

export default httpClient;
