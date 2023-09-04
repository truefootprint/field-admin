import React from "react";
import { TextInput, TextField, ReferenceInput, ReferenceField, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "personalised_text",
  showLocale: true,

  formFields: [
    <ReferenceInput source="user_interface_text_id" reference="user_interface_text" perPage={100}>
      <SelectInput optionText="key" />
    </ReferenceInput>,

    <TextInput source="project_role_id" />,
    <TextInput source="value" multiline />,
  ],

  gridFields: [
    <ReferenceField source="user_interface_text_id" reference="user_interface_text">
      <TextField source="key" />
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

    <TextField source="value" />,
  ],
});
