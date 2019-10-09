import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { NumberInput, ReferenceInput, SelectInput, ReferenceField, NumberField, FormDataConsumer } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <NumberInput label="Project activity id" source="project_activity_id" />

      <ReferenceInput source="topic_id" reference="topics">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <FormDataConsumer>{f => f && f.formData &&
        <ReferenceInput source="question_id" reference="questions" perPage={100} filter={{ topic_id: f.formData.topic_id }}>
          <SelectInput optionText="text" />
        </ReferenceInput>
      }</FormDataConsumer>

      <NumberInput source="order" />

      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "project_questions",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField source="project_activity_id" reference="project_activities">
          <TextField source="id" />
        </ReferenceField>

        <ReferenceField source="question_id" reference="questions">
          <TextField source="text" />
        </ReferenceField>

        <ReferenceField label="Project" source="project_activity_id" reference="project_activities" linkType={false}>
          <ReferenceField source="project_id" reference="projects" linkType={false}>
            <TextField source="name" />
          </ReferenceField>
        </ReferenceField>

        <ReferenceField label="Activity" source="project_activity_id" reference="project_activities" linkType={false}>
          <ReferenceField source="activity_id" reference="activities" linkType={false}>
            <TextField source="name" />
          </ReferenceField>
        </ReferenceField>

        <NumberField source="order" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
