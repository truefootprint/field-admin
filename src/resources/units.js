import React from "react";
import { TextField, TextInput, ReferenceInput, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "units",
  showLocale: true,

  formFields: (props) => [
    <TextInput source="official_name" />,

    <ReferenceInput source="type" reference="unit_types" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <TextInput source="singular" />,
    <TextInput source="plural" />,
  ],

  gridFields: (props) => [
    <TextField source="official_name" />,
    <TextField source="type" />,
    <TextField source="singular" />,
    <TextField source="plural" />,
  ],
});
