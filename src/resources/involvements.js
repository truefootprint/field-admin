import React from "react";
import { TextField, ReferenceInput, ReferenceField, NumberInput, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "involvements",

  formFields: (props) => [
    <NumberInput label="Project activity id" source="project_activity_id" />,

    <ReferenceInput source="user_id" reference="users" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ],

  gridFields: (props) => [
    <ReferenceField source="project_activity_id" reference="project_activities">
      <TextField source="id" />
    </ReferenceField>,

    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,
  ],
});
