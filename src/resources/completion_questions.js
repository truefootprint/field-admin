import React from "react";
import { ReferenceField, TextInput, TextField } from "react-admin";
import createResource from "../extensions/create_resource";
import QuestionInput from "../components/question_input";

export default createResource({
  name: "completion_questions",

  formFields: [
    <QuestionInput.TopicSelector />,
    <QuestionInput.QuestionSelector />,
    
    <TextInput source="completion_value" />,
  ],

  gridFields:[
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <TextField source="completion_value" />,
  ],
});
