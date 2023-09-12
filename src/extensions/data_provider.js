import { withLifecycleCallbacks } from 'react-admin';
import httpClient from "./http_client";
import { HOST } from "../consts";
import jsonServerProvider from "ra-data-json-server";

const baseDataProvider = jsonServerProvider(HOST, httpClient);

const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: 'projects',
    beforeSave: async (data, dataProvider) => (await imageToBase64(data))
  },
  {
    resource: 'project_types',
    beforeSave: async (data, dataProvider) => (await imageToBase64(data))
  },
  {
    resource: 'multi_choice_options',
    beforeSave: async (data, dataProvider) => (await imageToBase64(data))
  },
  {
    resource: 'documents',
    beforeSave: async (data, dataProvider) => {
      if (data.file?.rawFile !== undefined) {
        data.file.rawFile = await convertFileToBase64(data.file.rawFile)
      }
      return data
    }
  },
]);

const imageToBase64 = async (data) => {
  if (data.photo?.rawFile !== undefined) {
    data.photo.rawFile = await convertFileToBase64(data.photo.rawFile)
  }
  return data
}

const convertFileToBase64 = async a_file => {
  let a_function = file =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        let base64_string = String(reader.result).split(",")[1]
        resolve(base64_string)
      }
      reader.onerror = error => reject(error)
    })
  return await a_function(a_file)
}
export default dataProvider;
