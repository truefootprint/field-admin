import React from "react";
import {
  ImageInput,
  ImageField,
  TextInput,
  TextField,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  Labeled,
} from "react-admin";
import createResource from "../extensions/create_resource";
import Conditional from "../components/conditional/Conditional";

export default createResource({
  name: "projects",
  showLocale: true,
  options: {
    listPresentationParams: {
      photo: false,
      project_type_photo: false
    }
  },

  formFields: [
    <ReferenceInput source="programme_id" reference="programmes" perPage={100}>
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <ReferenceInput
      source="project_type_id"
      reference="project_types"
      perPage={100}
    >
      <SelectInput optionText="name" />
    </ReferenceInput>,

    <TextInput source="name" />,
    <ImageInput source="photo" label="Banner Image" accept="image/*">
      <ImageField source="src" title="name" />
    </ImageInput>,
    <Conditional when={d => !d.photo}>      
      <Labeled label="Project type photo fallback">
          <ImageField source="project_type_photo.src" title="project_type_photo.name" />
      </Labeled>
    </Conditional>,
  ],

  gridFields: [
    <ReferenceField source="programme_id" reference="programmes">
      <TextField source="name" />
    </ReferenceField>,

    <ReferenceField source="project_type_id" reference="project_types">
      <TextField source="name" />
    </ReferenceField>,

    <TextField source="name" />,
  ],
});
