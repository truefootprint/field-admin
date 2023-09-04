import React from "react";
import { FileInput, FileField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "documents",

  formFields: [
    <FileInput source="file">
      <FileField source="url" title="name" />
    </FileInput>,
  ],

  gridFields: [
    <FileField source="file.url" title="file.name" label="File" />,
  ],
});
