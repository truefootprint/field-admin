import React from "react";
import { ImageInput, ImageField, TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_types",
  options: {
    listPresentationParams: {
      photo: false
    }
  },

  formFields: [
    <TextInput source="name" />,
    <ImageInput source="photo" label="Banner Image" accept="image/*">
      <ImageField source="src" title="name" />
    </ImageInput>,
  ],

  gridFields: [
    <TextField source="name" />,
  ],
});
