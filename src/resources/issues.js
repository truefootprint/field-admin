import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { BooleanInput, NumberInput, RadioButtonGroupInput, ReferenceInput, SelectInput } from "react-admin";
import { ReferenceField, NumberField, BooleanField, LongTextInput } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="subject_type" reference="issue_subject_types">
        <RadioButtonGroupInput optionText="id" />
      </ReferenceInput>

      <NumberInput label="Subject id" source="subject_id" />

      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <LongTextInput source="description" />

      <BooleanInput source="critical" />

      {newRecord ? null : <TextField source="created_at" />}

      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "issues",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <TextField source="subject_type" />
        <NumberField label="Subject id" source="subject_id" />

        <ReferenceField source="user_id" reference="users">
          <TextField source="name" />
        </ReferenceField>

        <TextField source="description" />
        <BooleanField source="critical" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
