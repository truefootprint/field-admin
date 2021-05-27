import React from "react";
import { required, ImageField, ImageInput, TextInput, TextField, ReferenceInput, SelectInput, NumberInput, NumberField, ReferenceField } from "react-admin";
import createResource from "../extensions/create_resource";


export default createResource({
  name: "multi_choice_options",
  showLocale: true,

  formFields: (props) => [
    <ReferenceInput source="question_id" 
    reference="questions" filter={{ type: "MultiChoiceQuestion" }} 
    perPage={100}>
      <SelectInput optionText="text" />
    </ReferenceInput>,

    <TextInput source="text" validate={[required()]} />,

    <NumberInput source="order" />,
    <ImageField source="photo" title="title" />,
    <ImageInput source="photo" label="Related pictures" accept="image/*">
        <ImageField source="photo" title="title" />
    </ImageInput>
  ],

  gridFields: (props) => [
    <ReferenceField source="question_id" reference="questions">
      <TextField source="text" />
    </ReferenceField>,

    <TextField source="text" />,

    <NumberField source="order" />,
  ],
});
