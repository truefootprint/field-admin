import React from "react";
import { SimpleForm, TextField, DateField, Datagrid, Edit, Create, List } from "react-admin";

const form = (props, formFields) => {
  const newRecord = props.location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}
      {formFields(props)}
      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

const grid = (props, gridFields) => (
  <Datagrid rowClick="edit">
    <TextField source="id" />
    {gridFields(props)}
    <DateField source="created_at" showTime />
    <DateField source="updated_at" showTime />
  </Datagrid>
);

const createResource = (name, formFields, gridFields) => ({
  name: name,
  edit: (props) => <Edit {...props}>{form(props, formFields)}</Edit>,
  create: (props) => <Create {...props}>{form(props, formFields)}</Create>,
  list: (props) => <List {...props}>{grid(props, gridFields)}</List>,
});

export default createResource;
