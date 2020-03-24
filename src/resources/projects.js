import React from "react";
import { TextInput, TextField, ReferenceInput, SelectInput, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "projects",
  showLocale: true,

  formFields: (props) => [
    <ReferenceInput source="programme_id" reference="programmes" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="project_type_id" reference="project_types" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="name" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="programme_id" reference="programmes">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="project_type_id" reference="project_types">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="name" />,
  ],
});
