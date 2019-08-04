import styled from "styled-components"

import ButtonComponent from "../Button"

export const Container = styled.div`
  width: 99%;
  max-width: 55rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;

  background: var(--color-white);
  border: 1px solid var(--color-lightInk);
  border-radius: 3px;
`

export const Title = styled.h1`
  margin-bottom: 2rem;
`

export const Message = styled.p`
  font-size: 1.6rem;
  width: 100%;
  margin-bottom: 1.5rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 1rem;
`

export const Button = styled(ButtonComponent)`
  width: 12rem;
  margin-left: 1rem;
`
