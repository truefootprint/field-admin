import React from "react";
import { TextInput, TextField, NumberInput, ReferenceInput, SelectInput, ReferenceField, ImageField } from "react-admin";
import createResource from "../extensions/create_resource";

import UnitInput from "../components/unit_input";

export default createResource({
  name: "responses",
  options: {
    listPresentationParams: {
      photos: false
    }
  },
  formFields: [
    <NumberInput label="Project question id" source="project_question_id" />,

    <ReferenceInput source="user_id" reference="users" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="value" />,

    <UnitInput.TypeSelector />,
    <UnitInput.UnitSelector />,

    <ImageField source="photos" src="src" title="name" />
  ],

  gridFields: [
    <ReferenceField source="project_question_id" reference="project_questions">
      <TextField source="id" />
    </ReferenceField>,

    <ReferenceField source="user_id" reference="users">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="value" />,

    <ReferenceField label="Unit type" source="unit_id" reference="units" linkType={false} allowEmpty >
      <TextField source="type" />
    </ReferenceField>,

    <ReferenceField source="unit_id" reference="units" allowEmpty >
      <TextField source="official_name" />
    </ReferenceField>,
  ],
});
