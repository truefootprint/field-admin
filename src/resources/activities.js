import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "activities",
  showLocale: true,
  formFields: <TextInput source="name" />,
  gridFields: <TextField source="name" />,
});
