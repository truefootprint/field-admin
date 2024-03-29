import React from "react";
import { ReferenceInput, RadioButtonGroupInput, SelectInput, NumberInput } from "react-admin";
import { TextField, NumberField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "source_materials",

  formFields: [
    <ReferenceInput source="subject_type" reference="source_material_subject_types" perPage={100}>
      <RadioButtonGroupInput optionText="id" />
    </ReferenceInput>,

    <NumberInput label="Subject id" source="subject_id" />,

    <ReferenceInput source="document_id" reference="documents" perPage={100}>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <NumberInput source="page" allowEmpty />,
  ],

  gridFields: [
    <TextField source="subject_type" />,
    <NumberField label="Subject id" source="subject_id" />,

    <ReferenceField source="document_id" reference="documents">
      <TextField source="id" />
    </ReferenceField>,

    <NumberField source="page" allowEmpty />,
  ],
});
