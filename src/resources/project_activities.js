import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { NumberInput, ReferenceInput, SelectInput, ReferenceField, NumberField } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="project_id" reference="projects">
        <SelectInput />
      </ReferenceInput>

      <ReferenceInput source="activity_id" reference="activities">
        <SelectInput />
      </ReferenceInput>

      <NumberInput source="order" />

      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "project_activities",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField source="project_id" reference="projects">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="activity_id" reference="activities">
          <TextField source="name" />
        </ReferenceField>

        <NumberField source="order" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
