import React from "react";
import { ImageInput, ImageField, TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_types",

  formFields: (props) => [
    <TextInput source="name" />,
    <ImageField source="photo" title="title" />,
    <ImageInput source="photo" label="Banner Image" accept="image/*">
      <ImageField source="photo" title="title" />
    </ImageInput>,
  ],

  gridFields: (props) => [
    <TextField source="name" />,
  ],
});
