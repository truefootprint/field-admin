import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, FormDataConsumer, TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "completion_questions",

  formFields: (props) => [
    <ReferenceInput source="topic_id" reference="topics" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <FormDataConsumer>{f => f && f.formData &&
      <ReferenceInput source="question_id" reference="questions" perPage={100} filter={{ topic_id: f.formData.topic_id }}>
        <SelectInput optionText="text" />
      </ReferenceInput>
    }</FormDataConsumer>,

    <TextInput source="completion_value" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <TextField source="completion_value" />,
  ],
});
