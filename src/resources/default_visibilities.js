import React from "react";
import { TextField, ReferenceInput, ReferenceField, RadioButtonGroupInput, NumberField, SelectInput, NumberInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "default_visibilities",

  formFields: [
    <ReferenceInput source="subject_type" reference="default_visibility_subject_types" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <NumberInput label="Subject id" source="subject_id" />,

    <ReferenceInput source="role_id" reference="roles" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ],

  gridFields: [
    <TextField source="subject_type" />,
    <NumberField label="Subject id" source="subject_id" />,

    <ReferenceField source="role_id" reference="roles">
      <TextField source="name" />
    </ReferenceField>,
  ],
});
