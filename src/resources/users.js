import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "users",

  formFields: [
    <TextInput source="name" />,
    <TextInput source="country_code" />,
    <TextInput source="phone_number" />,
  ],

  gridFields: [
    <TextField source="interviewer_id" />,
    <TextField source="name" />,
    <TextField source="country_code" />,
    <TextField source="phone_number" />,
  ],
});
