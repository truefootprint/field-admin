import React from "react";
import { TextInput, TextField, NumberInput, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

import UnitInput from "../components/unit_input";

export default createResource({
  name: "expected_values",

  formFields: (props) => [
    <NumberInput label="Project question id" source="project_question_id" />,

    <TextInput source="value" />,

    <UnitInput.TypeSelector />,
    <UnitInput.UnitSelector />,
  ],

  gridFields: (props) => [
    <ReferenceField source="project_question_id" reference="project_questions">
      <TextField source="id" />
    </ReferenceField>,

    <ReferenceField label="Question" source="project_question_id" reference="project_questions" linkType={false}>
      <ReferenceField source="question_id" reference="questions" linkType={false}>
        <TextField source="text" />
      </ReferenceField>
    </ReferenceField>,

    <TextField source="value" />,

    <ReferenceField label="Unit type" source="unit_id" reference="units" linkType={false} allowEmpty >
      <TextField source="type" />
    </ReferenceField>,

    <ReferenceField source="unit_id" reference="units" allowEmpty >
      <TextField source="name" />
    </ReferenceField>,
  ],
});
