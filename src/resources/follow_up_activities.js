import React from "react";
import { TextField, ReferenceInput, SelectInput, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "follow_up_activities",

  formFields: (props) => [
    <ReferenceInput source="activity_id" reference="activities" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput source="follow_up_activity_id" reference="activities" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,
  ],

  gridFields: (props) => [
    <ReferenceField source="activity_id" reference="activities">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="follow_up_activity_id" reference="activities">
      <TextField source="name" />
    </ReferenceField>,
  ],
});
