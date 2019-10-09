import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { ReferenceInput, SelectInput, ReferenceField } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="activity_id" reference="activities">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput source="follow_up_activity_id" reference="activities">
        <SelectInput optionText="name" />
      </ReferenceInput>

      {newRecord ? null : <TextField source="created_at" />}

      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "follow_up_activities",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="activity_id" reference="activities">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="follow_up_activity_id" reference="activities">
          <TextField source="name" />
        </ReferenceField>
        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
