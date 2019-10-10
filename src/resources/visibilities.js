import React from "react";
import { TextField, ReferenceInput, RadioButtonGroupInput, NumberField, SelectInput, NumberInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "visibilities",

  formFields: (props) => [
    <ReferenceInput source="subject_type" reference="visibility_subject_types" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <NumberInput label="Subject id" source="subject_id" />,

    <ReferenceInput source="visible_to_type" reference="visibility_visible_to_types" perPage={100}>
      <RadioButtonGroupInput optionText="id" />
    </ReferenceInput>,

    <NumberInput label="Visible to id" source="visible_to_id" />,
  ],

  gridFields: (props) => [
    <TextField source="subject_type" />,
    <NumberField label="Subject id" source="subject_id" />,

    <TextField source="visible_to_type" />,
    <NumberField label="Visible to id" source="visible_to_id" />,
  ],
});
