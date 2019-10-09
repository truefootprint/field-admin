import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { ReferenceInput, SelectInput, ReferenceField } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput source="role_id" reference="roles">
        <SelectInput optionText="name" />
      </ReferenceInput>

      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "user_roles",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField source="user_id" reference="users">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="role_id" reference="roles">
          <TextField source="name" />
        </ReferenceField>

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
