import styled from "styled-components";
import { Form as Unform, Input as UnformInput } from "@rocketseat/unform";
import GlobalButton from "../../styles/components/Button";

export const Form = styled(Unform)`
  width: 99%;
  max-width: 55rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;

  background: var(--color-white);
  border: 1px solid var(--color-lightInk);
  border-radius: 3px;
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  margin-bottom: 0.5rem;
`;

export const Input = styled(UnformInput).attrs({
  type: "text",
  rows: 5
})`
  width: 100%;
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-lightInk);
  border-radius: 3px;
  resize: none;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 1rem;
`;

export const Button = styled(GlobalButton)`
  margin-left: 1rem;
`;
