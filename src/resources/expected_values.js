import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { TextInput, NumberInput, ReferenceField } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <NumberInput label="Project question id" source="project_question_id" />

      <TextInput source="value" />

      {newRecord ? null : <TextField source="created_at" />}

      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "expected_values",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="project_question_id" reference="project_questions">
          <TextField source="id" />
        </ReferenceField>

        <ReferenceField label="Question" source="project_question_id" reference="project_questions" linkType={false}>
          <ReferenceField source="question_id" reference="questions" linkType={false}>
            <TextField source="text" />
          </ReferenceField>
        </ReferenceField>

        <TextField source="value" />
        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
