import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { ReferenceInput, SelectInput, ReferenceField, NumberField, NumberInput, FormDataConsumer } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="activity_id" reference="activities">
        <SelectInput optionText="name" />
      </ReferenceInput>

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
  name: "default_questions",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="activity_id" reference="activities">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="question_id" reference="questions">
          <TextField source="text" />
        </ReferenceField>
        <NumberField source="order" />
        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
