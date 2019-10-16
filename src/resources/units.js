import React from "react";
import { TextField, TextInput, ReferenceInput, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "units",

  formFields: (props) => [
    <TextInput source="name" />,

    <ReferenceInput source="type" reference="unit_types" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,
  ],

  gridFields: (props) => [
    <TextField source="name" />,
    <TextField source="type" />,
  ],
});
