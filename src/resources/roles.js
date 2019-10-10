import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "roles",

  formFields: (props) => [
    <TextInput source="name" />,
  ],

  gridFields: (props) => [
    <TextField source="name" />,
  ],
});
