import React from "react";
import { Create, Datagrid, DateField, DisabledInput, Edit, List, SimpleForm, TextField } from "react-admin";
import { BooleanInput, NumberInput, RadioButtonGroupInput, ReferenceInput, SelectInput, TextInput } from "react-admin";
import Conditional from "../components/conditional";

const form = ({ location }) => {
  const newRecord = location.pathname.match(/create/);

  return (
    <SimpleForm>
      {newRecord ? null : <DisabledInput source="id" />}

      {newRecord ? null : <DisabledInput source="created_at" />}

      {newRecord ? null : <DisabledInput source="updated_at" />}

      <ReferenceInput source="type" reference="question_types">
        <RadioButtonGroupInput />
      </ReferenceInput>

      <Conditional when={d => d.type === "FreeTextQuestion"}>
        <NumberInput source="expected_length" />
      </Conditional>

      <Conditional when={d => d.type === "MultiChoiceQuestion"}>
        <BooleanInput source="multiple_answers" />
      </Conditional>

      <ReferenceInput source="data_type" reference="question_data_types">
        <RadioButtonGroupInput />
      </ReferenceInput>

      <ReferenceInput source="topic_id" reference="topics">
        <SelectInput />
      </ReferenceInput>

      <TextInput source="text" />
    </SimpleForm>
  );
};

export default {
  name: "questions",
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
