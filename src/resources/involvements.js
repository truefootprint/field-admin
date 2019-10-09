import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { NumberInput, ReferenceField, ReferenceInput, SelectInput } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <NumberInput label="Project activity id" source="project_activity_id" />

      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      {newRecord ? null : <TextField source="created_at" />}

      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "involvements",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="project_activity_id" reference="project_activities">
          <TextField source="id" />
        </ReferenceField>

        <ReferenceField source="user_id" reference="users">
          <TextField source="name" />
        </ReferenceField>

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
