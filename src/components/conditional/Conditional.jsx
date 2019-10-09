import React from "react";
import { FormDataConsumer } from "react-admin";

const Conditional = ({ when, children }) => (
  <FormDataConsumer>{f =>
    f && f.formData && when(f.formData) && children
  }</FormDataConsumer>
);

export default Conditional;
