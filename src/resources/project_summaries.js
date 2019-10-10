import React from "react";
import { TextField, ReferenceInput, SelectInput, LongTextInput, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_summaries",

  formFields: (props) => [
    <ReferenceInput source="project_id" reference="projects">
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <LongTextInput source="text" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="project_id" reference="projects">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="text" />,
  ],
});
