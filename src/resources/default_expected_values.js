import React from "react";
import { ReferenceInput, ReferenceField, SelectInput, TextField, TextInput, FormDataConsumer } from "react-admin";
import createResource from "../extensions/create_resource";

import UnitInput from "../components/unit_input";

export default createResource({
  name: "default_expected_values",

  formFields: (props) => [
    <ReferenceInput source="topic_id" reference="topics" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <FormDataConsumer>{f => f && f.formData &&
      <ReferenceInput source="question_id" reference="questions" perPage={100} filter={{ topic_id: f.formData.topic_id }}>
        <SelectInput optionText="text" />
      </ReferenceInput>
    }</FormDataConsumer>,

    <ReferenceInput source="activity_id" reference="activities" allowEmpty perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="value" />,

    <UnitInput.TypeSelector />,
    <UnitInput.UnitSelector />,
  ],

  gridFields: (props) => [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <ReferenceField source="activity_id" reference="activities" allowEmpty>
      <TextField source="name" />
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
