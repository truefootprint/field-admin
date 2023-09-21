import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, TextField, TextInput } from "react-admin";
import createResource from "../extensions/create_resource";

import QuestionInput from "../components/question_input";
import UnitInput from "../components/unit_input";

export default createResource({
  name: "default_expected_values",
  showLocale: true,

  formFields: [
    <QuestionInput.TopicSelector />,
    <QuestionInput.QuestionSelector />,

    <ReferenceInput source="activity_id" reference="activities" allowEmpty perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="value" />,

    <UnitInput.TypeSelector />,
    <UnitInput.UnitSelector />,
  ],

  gridFields: [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <ReferenceField source="activity_id" reference="activities" allowEmpty>
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
