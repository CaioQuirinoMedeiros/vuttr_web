import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 2.5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.7rem;
  font-size: 1.5rem;
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
