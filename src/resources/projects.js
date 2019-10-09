import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { TextInput, ReferenceInput, SelectInput, ReferenceField } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="programme_id" reference="programmes">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput source="project_type_id" reference="project_types">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <TextInput source="name" />

      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "projects",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField source="programme_id" reference="programmes">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="project_type_id" reference="project_types">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="name" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
