import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, NumberInput, NumberField, FormDataConsumer, TextField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "default_questions",

  formFields: (props) => [
    <ReferenceInput source="activity_id" reference="activities" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="topic_id" reference="topics" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <FormDataConsumer>{f => f && f.formData &&
      <ReferenceInput source="question_id" reference="questions" perPage={100} filter={{ topic_id: f.formData.topic_id }}>
        <SelectInput optionText="text" />
      </ReferenceInput>
    }</FormDataConsumer>,

    <NumberInput source="order" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="activity_id" reference="activities">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <NumberField source="order" />,
  ],
});
