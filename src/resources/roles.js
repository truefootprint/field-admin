import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "roles",
  showLocale: true,

  formFields: [
    <TextInput source="name" />,
    <TextInput source="display_name" />,
  ],

  gridFields: [
    <TextField source="name" />,
  ],
});
