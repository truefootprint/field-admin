import React from "react";
import { Create, Datagrid, DateField, Edit, List, SimpleForm, TextField } from "react-admin";
import { BooleanInput, NumberInput, RadioButtonGroupInput, ReferenceInput, SelectInput } from "react-admin";
import { ReferenceField, NumberField, BooleanField, LongTextInput } from "react-admin";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <TextField source="id" />}

      <ReferenceInput source="issue_id" reference="issues">
        <SelectInput optionText="description" />
      </ReferenceInput>

      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>

      <LongTextInput source="description" />

      {newRecord ? null : <TextField source="created_at" />}

      {newRecord ? null : <TextField source="updated_at" />}
    </SimpleForm>
  );
};

export default {
  name: "resolutions",
  edit: (props) => <Edit {...props}>{form(props)}</Edit>,
  create: (props) => <Create {...props}>{form(props)}</Create>,
  list: (props) => (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />

        <ReferenceField label="Raised by" source="issue_id" reference="issues" linkType={false}>
          <ReferenceField source="user_id" reference="users" linkType={false}>
            <TextField source="name" />
          </ReferenceField>
        </ReferenceField>

        <ReferenceField label="Resolved by" source="user_id" reference="users">
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField source="issue_id" reference="issues">
          <TextField source="description" />
        </ReferenceField>

        <TextField label="Resolution" source="description" />

        <DateField source="created_at" showTime />
        <DateField source="updated_at" showTime />
      </Datagrid>
    </List>
  ),
};
