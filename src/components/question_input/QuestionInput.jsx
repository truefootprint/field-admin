import React from "react";
import { ReferenceInput, SelectInput, FormDataConsumer } from "react-admin";

const QuestionInput = {};

QuestionInput.TopicSelector = () => (
  <ReferenceInput source="topic_id" reference="topics">
    <SelectInput optionText="name" />
  </ReferenceInput>
);

QuestionInput.QuestionSelector = () => (
  <FormDataConsumer>{f => f && f.formData &&
    <ReferenceInput source="question_id" reference="questions" perPage={100} filter={{ topic_id: f.formData.topic_id }}>
      <SelectInput optionText="text" />
    </ReferenceInput>
  }</FormDataConsumer>
);

export default QuestionInput;
