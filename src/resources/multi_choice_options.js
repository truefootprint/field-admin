import React from "react";
import { required, ImageField, ImageInput, TextInput, TextField, ReferenceInput, SelectInput, NumberInput, NumberField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "multi_choice_options",
  showLocale: true,
  options: {
    listPresentationParams: {
      photo: false
    }
  },

  formFields: [
    <ReferenceInput source="question_id" 
    reference="questions" filter={{ type: "MultiChoiceQuestion" }} 
    perPage={100}>
      <SelectInput optionText="text" />
    </ReferenceInput>,

    <TextInput source="text" validate={[required()]} />,

    <NumberInput source="order" />,
    <ImageInput source="photo" label="Related pictures" accept="image/*">
      <ImageField source="src" title="name" />
    </ImageInput>
  ],

  gridFields: [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <TextField source="text" />,

    <NumberField source="order" />,
  ],
});
