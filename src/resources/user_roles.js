import React from "react";
import { TextField, ReferenceInput, ReferenceField, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "user_roles",

  formFields: (props) => [
    <ReferenceInput source="user_id" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="role_id" reference="roles">
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ],

  gridFields: (props) => [
    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="role_id" reference="roles">
      <TextField source="name" />
    </ReferenceField>,
  ],
});
