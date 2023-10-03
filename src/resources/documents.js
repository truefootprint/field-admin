import React from "react";
import { FileInput, FileField } from "react-admin";
import createResource from "../extensions/create_resource";

export default createResource({
  name: "documents",

  formFields: [
    <FileInput source="file" accept="application/pdf">
      <FileField source="src" title="name" />
    </FileInput>,
  ],

  gridFields: [
    <FileField source="file.src" title="file.name" label="File" />,
  ],
});
