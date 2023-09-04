import React from "react";
import { TextInput, ReferenceInput, SelectInput, RadioButtonGroupInput, NumberInput, BooleanInput } from "react-admin";
import { TextField, ReferenceField, NumberField, BooleanField } from "react-admin";
import Conditional from "../components/conditional";
import createResource from "../extensions/create_resource";
import UnitInput from "../components/unit_input";

export default createResource({
  name: "questions",
  showLocale: true,

  formFields: [
    <TextInput source="text" />,

    <ReferenceInput source="topic_id" reference="topics" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="type" reference="question_types" perPage={100}>
      <RadioButtonGroupInput optionText="id" />
    </ReferenceInput>,

    <BooleanInput label="Isssues Possible" source="issues_possible" />,

    <Conditional when={d => d.type === "FreeTextQuestion"}>
      <NumberInput source="expected_length" />
    </Conditional>,

    <Conditional when={d => d.type === "MultiChoiceQuestion"}>
      <BooleanInput source="multiple_answers" />
    </Conditional>,

    <ReferenceInput source="data_type" reference="question_data_types" perPage={100}>
      <RadioButtonGroupInput optionText="id" />
    </ReferenceInput>,

    <UnitInput.TypeSelector />,
    <UnitInput.UnitSelector />,
  ],

  gridFields: [
    <TextField source="text" />,

    <ReferenceField source="topic_id" reference="topics">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="type" />,
    <NumberField source="expected_length" />,
    <BooleanField source="multiple_answers" />,
    <TextField source="data_type" />,

    <ReferenceField label="Unit type" source="unit_id" reference="units" linkType={false} allowEmpty >
      <TextField source="type" />
    </ReferenceField>,

    <ReferenceField source="unit_id" reference="units" allowEmpty >
      <TextField source="official_name" />
    </ReferenceField>,
  ],
});
