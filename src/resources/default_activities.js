import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, NumberInput, NumberField, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "default_activities",

  formFields: [
    <ReferenceInput source="project_type_id" reference="project_types" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="activity_id" reference="activities" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <NumberInput source="order" />,
  ],

  gridFields: [
    <ReferenceField source="project_type_id" reference="project_types">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="activity_id" reference="activities">
      <TextField source="name" />
    </ReferenceField>,

    <NumberField source="order" />
  ],
});
