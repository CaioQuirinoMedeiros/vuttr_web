import styled from "styled-components"
import { Form as FormikForm } from "formik"

import ButtonComponent from "../../components/Button"
import StyledInput from "../../styles/components/Input"

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`

export const Form = styled(FormikForm)`
  height: 5rem;
  display: flex;
  align-items: center;

  background: var(--color-white);
  box-shadow: 0 10px 15px 0 var(--color-lighterShadow);
  border-radius: 3px;
  padding: 1rem;
`

export const Input = styled(StyledInput)`
  margin: 0 !important;
  width: 18rem;
  height: 100%;
`

export const SearchButton = styled(ButtonComponent)`
  margin-right: 1rem;
  height: 100%;
  padding: 0 1rem;
`

export const SearchInput = styled.input`
  margin-right: 1rem;
  font-size: 1.4rem;
  flex-grow: 1;
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-lightInk);
  border-radius: 3px;
`

export const CheckInput = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  & input {
    height: 1.7rem;
    width: 1.7rem;
    margin: 0 1rem !important;
    flex-shrink: 0;
  }
`

export const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

export const Message = styled.h2`
  font-size: 2.6rem;
  color: var(--color-lightInk);
`
