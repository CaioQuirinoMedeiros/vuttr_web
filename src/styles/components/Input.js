import styled from "styled-components";
import { Field } from "formik";

const Input = styled(Field)`
  width: 100%;
  padding: 1rem;
  resize: none;

  border: 1px solid
    ${props =>
      props.error ? "var(--color-danger)" : "var(--color-darkestWhite)"};
  border-radius: 3px;
  color: ${props => (props.error ? "var(--color-danger)" : "var(--color-ink)")};
  font-size: 1.5rem;
  background: ${props =>
    props.error ? "var(--color-mostLightestRed)" : "var(--color-darkerWhite)"};

  &::placeholder {
    color: ${props =>
      props.error ? "var(--color-lightRed)" : "var(--color-lighterInk)"};
  }

  &:hover {
    border-color: ${props =>
      props.error
        ? "var(--color-dangerHover)"
        : "var(--color-mostDarkestWhite)"};
  }
  &:focus {
    background: ${props =>
      props.error
        ? "var(--color-mostLightestRed)"
        : "var(--color-darkestWhite)"};

    border-color: ${props =>
      props.error
        ? "var(--color-dangerHover)"
        : "var(--color-mostDarkestWhite)"};
  }

  &:focus:hover {
    border-color: ${props =>
      props.error
        ? "var(--color-dangerHover)"
        : "var(--color-mostDarkestWhite)"};
  }
`;

export default Input;
