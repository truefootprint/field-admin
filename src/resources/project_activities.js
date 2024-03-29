import React from "react";
import { TextField, ReferenceInput, SelectInput, ReferenceField, NumberInput, NumberField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_activities",

  formFields: [
    <ReferenceInput source="project_id" reference="projects" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="activity_id" reference="activities" perPage={100}>
      <SelectInput />
    </ReferenceInput>,

    <NumberInput source="order" />,
  ],

  gridFields: [
    <ReferenceField source="project_id" reference="projects">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="activity_id" reference="activities">
      <TextField source="name" />
    </ReferenceField>,

    <NumberField source="order" />,
  ],
});
