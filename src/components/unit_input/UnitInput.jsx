import React from "react";
import { ReferenceInput, SelectInput, FormDataConsumer } from "react-admin";

const UnitInput = {};

UnitInput.TypeSelector = () => (
  <ReferenceInput source="unit_type" reference="unit_types" allowEmpty>
    <SelectInput optionText="id" />
  </ReferenceInput>
);

UnitInput.UnitSelector = () => (
  <FormDataConsumer>{f => f && f.formData &&
    <ReferenceInput source="unit_id" reference="units" perPage={100} filter={{ type: f.formData.unit_type }} allowEmpty>
      <SelectInput optionText="official_name" />
    </ReferenceInput>
  }</FormDataConsumer>
);

export default UnitInput;
