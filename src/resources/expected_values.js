import React from "react";
import { TextInput, TextField, NumberInput, ReferenceField, ReferenceInput, FormDataConsumer, SelectInput } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "expected_values",

  formFields: (props) => [
    <NumberInput label="Project question id" source="project_question_id" />,

    <TextInput source="value" />,

    <ReferenceInput source="unit_type" reference="unit_types" allowEmpty>
      <SelectInput optionText="id" />
    </ReferenceInput>,

    <FormDataConsumer>{f => f && f.formData &&
      <ReferenceInput source="unit_id" reference="units" perPage={100} filter={{ type: f.formData.unit_type }} allowEmpty>
        <SelectInput />
      </ReferenceInput>
    }</FormDataConsumer>,
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

    <ReferenceField label="Unit type" source="unit_id" reference="units" linkType={false}>
      <TextField source="type" />
    </ReferenceField>,

    <ReferenceField source="unit_id" reference="units">
      <TextField source="name" />
    </ReferenceField>,
  ],
});
