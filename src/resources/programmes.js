import React from "react";
import { TextInput, TextField, LongTextInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "programmes",
  showLocale: true,

  formFields: (props) => [
    <TextInput source="name" />,
    <LongTextInput source="description" />,
  ],

  gridFields: (props) => [
    <TextField source="name" />,
    <TextField source="description" />,
  ],
});
