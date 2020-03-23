import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "user_interface_text",
  showLocale: true,

  formFields: (props) => [
    <TextInput source="key" />,
    <TextInput source="value" />,
  ],

  gridFields: (props) => [
    <TextField source="key" />,
    <TextField source="value" />,
  ],
});
