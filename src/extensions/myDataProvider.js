import httpClient from "./http_client";
import withFileUpload from "./with_file_upload";
import withLocale from "./with_locale";
import { HOST } from "../consts";
import jsonServerProvider from "ra-data-json-server";
import { v4 as uuidv4 } from "uuid";

const dataProvider = jsonServerProvider(HOST, httpClient);
const token = localStorage.getItem("token");
const headers = new Headers();
let form = new FormData();

const myDataProvider = {
  ...dataProvider,
  createMany: (resource, params) => {
    const items = params.data;
    console.log("CSV22")
    console.log(params.data)
    // Handle create many here
  },
  create: (resource, params) => {
    const locale = (params.data || {}).locale || (params.filter || {}).locale;
    console.log("CHANDA locale")
    console.log(locale)
    if (typeof(locale) !== "undefined") {
      localStorage.setItem("locale", locale);
    }

    if (typeof params.data.photo == "undefined") {
      // fallback to the default implementation
      return dataProvider.create(resource, params);
    }
    if (typeof params.data.photo !== "undefined") {
      if (params.data.photo.rawFile !== undefined) {
        let rawFile = params.data.photo.rawFile;
        form.set("photo", rawFile);
      }
      form.set("text", params.data.text);
      form.set("name", params.data.name);
      form.set("order", params.data.order);
      form.set("question_id", params.data.question_id);
      
      console.log('DATEA');
      console.log(params.data)
      headers.append("Authorization", `Basic ${token}`);
      headers.append("Accept-Language", localStorage.getItem("locale"));

      return fetch(`${HOST}/${resource}`, {
        method: "POST",
        body: form,
        headers: headers,
      })
        .then((response) => response.json())
        .then((json) => ({ data: { id: json.id } }));
    }
  },
  update: (resource, params) => {
    const locale = (params.data || {}).locale || (params.filter || {}).locale;

    if (typeof locale !== "undefined") {
      localStorage.setItem("locale", locale);
    }
    if (typeof params.data.photo == "undefined") {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
    if (typeof params.data.photo !== "undefined") {
      if (typeof params.data.photo.rawFile !== "undefined") {
        let rawFile = params.data.photo.rawFile;
        form.set("photo", rawFile);
      }
      form.set("name", params.data.name);
      form.set("order", params.data.order);
      form.set("question_id", params.data.question_id);
      form.set("text", params.data.text);

      headers.append("Authorization", `Basic ${token}`);
      headers.append("Accept-Language", localStorage.getItem("locale"));
      return fetch(`${HOST}/${resource}/${params.data.id}`, {
        method: "PUT",
        body: form,
        headers: headers,
      })
        .then((response) => response.json())
        .then((json) => ({ data: { id: json.id } }));
    }

    if (typeof params.data.file !== "undefined") {
      let rawFile = params.data.file.rawFile;

      form.set("file", rawFile);
      form.set("name", rawFile.name);

      const token = localStorage.getItem("token");
      const headers = new Headers();

      headers.append("Authorization", `Basic ${token}`);
      fetch(`${HOST}/${resource}`, {
        method: "POST",
        body: form,
        headers: headers,
      })
        .then((response) => response.json())
        .then((json) => ({ data: { id: json.id } }));
    }
  },
};
//console.log(myDataProvider);
export default myDataProvider;
