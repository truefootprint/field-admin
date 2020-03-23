import React from "react";
import { SimpleForm, TextField, DateField, Datagrid, Edit, Create, List, Filter, TextInput } from "react-admin";

const form = (props, formFields, showLocale) => {
  const newRecord = props.location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}
      {showLocale ? <TextInput source="locale" defaultValue="en"  /> : null}
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

const filters = (showLocale) => (
  <Filter>
    {showLocale && <TextInput label="Locale" source="locale" alwaysOn />}
  </Filter>
);

const createResource = ({ name, formFields, gridFields, showLocale }) => ({
  name: name,
  edit: (props) => <Edit {...props}>{form(props, formFields, showLocale)}</Edit>,
  create: (props) => <Create {...props}>{form(props, formFields, showLocale)}</Create>,
  list: (props) => (
    <List {...props} filters={filters(showLocale)} filterDefaultValues={{ locale: "en" }}>
      {grid(props, gridFields)}
    </List>
  ),
});

export default createResource;
