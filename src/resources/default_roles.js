import React from "react";
import { TextField, ReferenceInput, ReferenceField, SelectInput, NumberInput, NumberField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "default_roles",

  formFields: (props) => [
    <ReferenceInput source="project_type_id" reference="project_types" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="role_id" reference="roles" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <NumberInput source="order" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="project_type_id" reference="project_types">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="role_id" reference="roles">
      <TextField source="name" />
    </ReferenceField>,

    <NumberField source="order" />
  ],
});
