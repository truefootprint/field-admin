import React from "react";
import { TextField, ReferenceInput, ReferenceField, SelectInput, NumberInput, NumberField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_roles",

  formFields: [
    <ReferenceInput source="project_id" reference="projects" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="role_id" reference="roles" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <NumberInput source="order" />,
  ],

  gridFields: [
    <ReferenceField source="project_id" reference="projects">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="role_id" reference="roles">
      <TextField source="name" />
    </ReferenceField>,

    <NumberField source="order" />,
  ],
});
