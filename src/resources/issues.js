import React from "react";
import { NumberInput, TextInput, ReferenceInput, SelectInput, RadioButtonGroupInput } from "react-admin";
import { NumberField, TextField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "issues",

  formFields: [
    <ReferenceInput source="subject_type" reference="issue_subject_types" perPage={100}>
      <RadioButtonGroupInput optionText="id" />
    </ReferenceInput>,

    <NumberInput label="Subject id" source="subject_id" />,

    <ReferenceInput source="user_id" reference="users" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="description" multiline/>,
  ],

  gridFields: [
    <TextField source="uuid" />,
    <TextField source="subject_type" />,
    <NumberField label="Subject id" source="subject_id" />,

    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="description" />,
  ],
});
