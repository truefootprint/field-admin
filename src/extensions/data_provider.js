import { withLifecycleCallbacks } from 'react-admin';
import httpClient from "./http_client";
import { HOST } from "../consts";
import jsonServerProvider from "ra-data-json-server";

const baseDataProvider = jsonServerProvider(HOST, httpClient);

const processImage = async (data) => {
  if (data.photo?.hasOwnProperty("src") && data.photo?.rawFile === undefined) {
    delete data.photo
  }

  if (data.photo?.rawFile !== undefined) {
    data.photo.rawFile = await convertFileToBase64(data.photo.rawFile)
  }
  return data
}

const generateSrcFor = (type) => async (data) => {
  if (data[type] === undefined) return data

  if (Array.isArray(data[type])) {
    data[type] = data[type].reduce((acc, item) => {
      item.src = `${HOST}${item.url}`
      acc.push(item)
      return acc
    }, [])
  } else {
    data[type].src = `${HOST}${data[type].url}`
  }

  return data
}

const convertFileToBase64 = async file => {
  let func = f =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(f)
      reader.onload = () => {
        resolve(String(reader.result).split(",")[1])
      }
      reader.onerror = error => reject(error)
    })
  return await func(file)
}

const dataProvider = withLifecycleCallbacks(baseDataProvider, [
  {
    resource: 'projects',
    beforeSave: processImage,
    afterRead: generateSrcFor('photo'),
  },
  {
    resource: 'project_types',
    beforeSave: processImage,
    afterRead: generateSrcFor('photo'),
  },
  {
    resource: 'multi_choice_options',
    beforeSave: processImage,
    afterRead: generateSrcFor('photo'),
  },
  {
    resource: 'responses',
    afterRead: generateSrcFor('photos'),
  },
  {
    resource: 'documents',
    beforeSave: async (data, dataProvider) => {
      if (data.file?.rawFile !== undefined) {
        data.file.rawFile = await convertFileToBase64(data.file.rawFile)
      }
      return data
    },
    afterRead: generateSrcFor('file'),
  }
]);
export default dataProvider;
