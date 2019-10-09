import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { BooleanInput, NumberInput, RadioButtonGroupInput, ReferenceInput, SelectInput } from "react-admin";
import { ReferenceField, NumberField, BooleanField, LongTextInput } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="subject_type" reference="visibility_subject_types">
        <SelectInput optionText="id" />
      </ReferenceInput>

      <NumberInput label="Subject id" source="subject_id" />

      <ReferenceInput source="visible_to_type" reference="visibility_visible_to_types">
        <RadioButtonGroupInput optionText="id" />
      </ReferenceInput>

      <NumberInput label="Visible to id" source="visible_to_id" />

      {newRecord ? null : <TextField source="created_at" />}
      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "visibilities",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <TextField source="subject_type" />
        <NumberField label="Subject id" source="subject_id" />

        <TextField source="visible_to_type" />
        <NumberField label="Visible to id" source="visible_to_id" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
