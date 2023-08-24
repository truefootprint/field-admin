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
    console.log("in my data provider");
    console.log(params.data);
    if (typeof(locale) !== "undefined") {
      localStorage.setItem("locale", locale);
    }

    if (typeof params.data.photo !== "undefined" && window.location.href.includes("multi_choice_options")) {
      if (params.data.photo.rawFile !== undefined) {
        let rawFile = params.data.photo.rawFile;
        form.set("photo", rawFile);
      }
      form.set("text", params.data.text);
      form.set("name", params.data.name);
      form.set("order", params.data.order);
      form.set("question_id", params.data.question_id);
      
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

    if (typeof params.data.file !== "undefined" && window.location.href.includes("documents")) {
      if (params.data.file.rawFile !== undefined) {
        let rawFile = params.data.file.rawFile;
        form.set("file", rawFile);
        form.set("name", rawFile.name); 
      }    
          
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

    if (typeof params.data.photo == "undefined" || typeof params.data.file == "undefined") {
      // fallback to the default implementation
      return dataProvider.create(resource, params);
    }
  },
  update: (resource, params) => {
    const locale = (params.data || {}).locale || (params.filter || {}).locale;

    if (typeof locale !== "undefined") {
      localStorage.setItem("locale", locale);
    }
    if (typeof params.data.photo !== "undefined" && window.location.href.includes("multi_choice_options")) {
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

    if (typeof params.data.file !== "undefined" && window.location.href.includes("documents")) {
      let rawFile = params.data.file.rawFile;
      let form = new FormData();

      form.set("file", rawFile);
      form.set("name", rawFile.name);

      const token = localStorage.getItem("token");
      const headers = new Headers();

      headers.append("Authorization", `Basic ${token}`);

      return fetch(`${HOST}/${resource}/${params.data.id}`, { method: "PUT", body: form, headers: headers })
        .then((response) => response.json())
        .then((json) => ( { data: { id: json.id }} ))
    }

    if (typeof params.data.photo == "undefined" || typeof params.data.file == "undefined") {
      // fallback to the default implementation
      return dataProvider.update(resource, params);
    }
  },
};

export default myDataProvider;
