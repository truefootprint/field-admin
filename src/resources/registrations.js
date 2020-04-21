import React from "react";
import { TextField, TextInput, ReferenceInput, ReferenceField, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "registrations",

  formFields: (props) => [
    <ReferenceInput source="user_id" reference="users" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="project_role_id" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField label="Project" source="project_role_id" reference="project_roles">
      <ReferenceField source="project_id" reference="projects">
        <TextField source="name" />
      </ReferenceField>
    </ReferenceField>,

    <ReferenceField label="Role" source="project_role_id" reference="project_roles">
      <ReferenceField source="role_id" reference="roles">
        <TextField source="name" />
      </ReferenceField>
    </ReferenceField>,
  ],
});
