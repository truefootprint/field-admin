import React from "react";
import { TextInput, TextField, ReferenceInput, SelectInput, NumberInput, NumberField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "multi_choice_options",

  formFields: (props) => [
    <ReferenceInput source="question_id" reference="questions" filter={{ type: "MultiChoiceQuestion" }} perPage={100}>
      <SelectInput optionText="text" />
    </ReferenceInput>,

    <TextInput source="text" />,

    <NumberInput source="order" />,
  ],

  gridFields: (props) => [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <TextField source="text" />,

    <NumberField source="order" />,
  ],
});
