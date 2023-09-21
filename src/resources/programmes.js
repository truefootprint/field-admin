import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "programmes",
  showLocale: true,

  formFields: [
    <TextInput source="name" />,
    <TextInput source="description" multiline/>,
  ],

  gridFields: [
    <TextField source="name" />,
    <TextField source="description" />,
  ],
});
