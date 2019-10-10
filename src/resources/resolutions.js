import React from "react";
import { TextField, ReferenceInput, LongTextInput, ReferenceField, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "resolutions",

  formFields: (props) => [
    <ReferenceInput source="issue_id" reference="issues">
      <SelectInput optionText="description" />
    </ReferenceInput>,

    <ReferenceInput source="user_id" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <LongTextInput source="description" />,
  ],

  gridFields: (props) => [
    <ReferenceField label="Raised by" source="issue_id" reference="issues" linkType={false}>
      <ReferenceField source="user_id" reference="users" linkType={false}>
        <TextField source="name" />
      </ReferenceField>
    </ReferenceField>,

    <ReferenceField label="Resolved by" source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="issue_id" reference="issues">
      <TextField source="description" />
    </ReferenceField>,

    <TextField label="Resolution" source="description" />,
  ],
});
