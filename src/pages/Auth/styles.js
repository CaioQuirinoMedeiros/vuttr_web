import styled from "styled-components"
import { Link as RouterLink } from "react-router-dom"
import { Form as FormikForm } from "formik"

import InputComponent from "../../components/Input"
import ButtonComponent from "../../components/Button"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled(FormikForm)`
  width: 95%;
  max-width: 55rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;

  border-radius: 3px;
  background: var(--color-white);
  box-shadow: 0 10px 15px 0 var(--color-lighterShadow);
`

export const Title = styled.h1`
  margin-bottom: 2.5rem;
  text-transform: uppercase;
`

export const Input = styled(InputComponent)``

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled(ButtonComponent).attrs({
  animate: true
})`
  width: 100%;
  margin: 1rem 0;
`

export const Link = styled(RouterLink)`
  width: 100%;
  font-size: 1.6rem;
  text-align: center;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
