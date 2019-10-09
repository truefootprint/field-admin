import React from "react";
import { Create, Datagrid, DateField, DisabledInput, Edit, List, SimpleForm, TextField } from "react-admin";
import { NumberInput, ReferenceInput, SelectInput, TextInput } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <DisabledInput source="id" />}

      {newRecord ? null : <DisabledInput source="created_at" />}

      {newRecord ? null : <DisabledInput source="updated_at" />}

      <ReferenceInput source="question_id" reference="questions" filter={{ type: "MultiChoiceQuestion" }}>
        <SelectInput optionText="text" />
      </ReferenceInput>

      <TextInput source="text" />

      <NumberInput source="order" />
    </SimpleForm>
  );
};

export default {
  name: "multi_choice_options",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
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
