import React from "react";
import { Field } from "formik";

import StyledInput from "../../styles/components/Input";

import { InputWrapper, Label, Error } from "./styles";

const Input = props => (
  <InputWrapper>
    <Label>{props.label}</Label>
    <StyledInput {...props} />
    {props.error && <Error>{props.error}</Error>}
  </InputWrapper>
);

export default Input;
