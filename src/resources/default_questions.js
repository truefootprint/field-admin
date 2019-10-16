import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, NumberInput, NumberField, TextField } from "react-admin";
import createResource from "../extensions/create_resource";
import QuestionInput from "../components/question_input";

export default createResource({
  name: "default_questions",

  formFields: (props) => [
    <ReferenceInput source="activity_id" reference="activities" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <QuestionInput.TopicSelector />,
    <QuestionInput.QuestionSelector />,

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
