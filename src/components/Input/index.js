import React from "react";

import StyledInput from "../../styles/components/Input";

import { InputWrapper, Label, Error } from "./styles";

const Input = props => (
  <InputWrapper>
    <Label htmlFor={props.name}>{props.label}</Label>
    <StyledInput {...props} id={props.name} />
    {props.error && <Error>{props.error}</Error>}
  </InputWrapper>
);

export default Input;
