import styled from 'styled-components';
import { Form as FormikForm } from 'formik';

import StyledInput from '../../styles/components/Input';
import InputComponent from '../../components/Input';
import ButtonComponent from '../../components/Button';

export const Form = styled(FormikForm)`
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

export const Input = styled(InputComponent)``;

export const InputLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 1rem;
`;

export const Button = styled(ButtonComponent)`
  margin-left: 1rem;
  width: 12rem;
`;

export const Label = styled.label`
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
`;

export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 2rem;
`;

export const TagWrapper = styled.div`
  display: flex;
  margin: 0 1rem 1rem 0;
`;

export const TagInput = styled(StyledInput)`
  width: 12rem;
  font-size: 1.3rem;
  padding: 0.3rem 0.6rem;
`;

export const DeleteTagButton = styled.button.attrs({ type: 'button' })`
  padding: 0 0.4rem;
  font-size: 1.5rem;

  font-weight: bold;
  color: var(--color-danger);
  transition: all 0.2s;

  &:hover {
    color: var(--color-dangerHover);
  }
`;

export const AddTagButton = styled(ButtonComponent).attrs({
  type: 'button',
  color: 'secundary',
})`
  width: 12rem;
  letter-spacing: 0;
  height: auto;
  padding: 0.2rem 1rem;
`;

export const Error = styled.span`
  width: 100%;
  text-align: right;
  position: absolute;
  right: 0.5%;
  top: 105%;
  color: var(--color-danger);
  font-size: 1.2rem;
`;
