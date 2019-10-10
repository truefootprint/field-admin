import React from "react";
import { TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource("activities", () => [
  <TextInput source="name" />,
], () => [
  <TextField source="name" />,
]);
