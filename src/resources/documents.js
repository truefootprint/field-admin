import React from "react";
import { Create, Datagrid, DateField, DisabledInput, Edit, List, SimpleForm, TextField } from "react-admin";
import { FileInput, FileField } from "react-admin";

const form = (
  <SimpleForm>
    <DisabledInput source="id" />

    <FileInput source="file">
      <FileField source="url" title="name" />
    </FileInput>

    <DisabledInput source="created_at" />
    <DisabledInput source="updated_at" />
  </SimpleForm>
);

export default {
  name: "documents",
  edit: (props) => <Edit {...props}>{form}</Edit>,
  create: (props) => <Create {...props}>{form}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <FileField source="file.url" title="file.name" label="File" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </Datagrid>
    </List>
  ),
};
