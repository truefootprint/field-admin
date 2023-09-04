import React from "react";
import { BooleanInput, TextInput, ReferenceInput, SelectInput } from "react-admin";
import { BooleanField, TextField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "issue_notes",

  formFields: [
    <ReferenceInput source="issue_id" reference="issues" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <ReferenceInput source="user_id" reference="users" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="text" />,
    <TextInput source="photos_json" />,
    <BooleanInput source="resolved" />,
  ],

  gridFields: [
    <ReferenceField source="issue_id" reference="issues">
      <TextField source="uuid" />
    </ReferenceField>,

    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="text" />,
    <TextField source="photos_json" />,
    <BooleanField source="resolved" />,
  ],
});
