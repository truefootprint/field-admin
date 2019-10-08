import React from "react";
import { Create, Datagrid, DateField, DisabledInput, Edit, List, SimpleForm, TextField } from "react-admin";

const form = (
  <SimpleForm>
    <DisabledInput source="id" />
    <DisabledInput source="created_at" />
    <DisabledInput source="updated_at" />
  </SimpleForm>
);

export default {
  name: "user_roles",
  edit: (props) => <Edit {...props}>{form}</Edit>,
  create: (props) => <Create {...props}>{form}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </Datagrid>
    </List>
  ),
};
