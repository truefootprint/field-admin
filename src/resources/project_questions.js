import React from "react";
import { NumberInput, ReferenceInput, SelectInput, FormDataConsumer } from "react-admin";
import { TextField, ReferenceField, NumberField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "project_questions",

  formFields: (props) => [
    <NumberInput label="Project activity id" source="project_activity_id" />,

    <ReferenceInput source="topic_id" reference="topics">
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
