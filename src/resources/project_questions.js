import React from "react";
import { TextInput, NumberInput, TextField, ReferenceField, NumberField } from "react-admin";
import createResource from "../extensions/create_resource";
import QuestionInput from "../components/question_input";

export default createResource({
  name: "project_questions",

  formFields: [
    <NumberInput label="Project activity id" source="project_activity_id" />,

    <QuestionInput.TopicSelector />,
    <QuestionInput.QuestionSelector />,
    
    <NumberInput source="order" />,
    <NumberInput label="Parent Project Question id" source="parent_project_question_id" />,    
    <TextInput label="Child Project Question response trigger" source="child_response_trigger" />
  ],

  gridFields: [
    <ReferenceField source="project_activity_id" reference="project_activities">
      <TextField source="id" />
    </ReferenceField>,

    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <ReferenceField label="Project" source="project_activity_id" reference="project_activities" linkType={false}>
      <ReferenceField source="project_id" reference="projects" linkType={false}>
        <TextField source="name" />
      </ReferenceField>
    </ReferenceField>,

    <ReferenceField label="Activity" source="project_activity_id" reference="project_activities" linkType={false}>
      <ReferenceField source="activity_id" reference="activities" linkType={false}>
        <TextField source="name" />
      </ReferenceField>
    </ReferenceField>,

    <NumberField source="order" />,
  ],
});
