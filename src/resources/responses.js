import React from "react";
import { TextInput, TextField, NumberInput, ReferenceInput, SelectInput, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "responses",

  formFields: (props) => [
    <NumberInput label="Project question id" source="project_question_id" />,

    <ReferenceInput source="user_id" reference="users">
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="value" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="project_question_id" reference="project_questions">
      <TextField source="id" />
    </ReferenceField>,

    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="value" />,
  ],
});
