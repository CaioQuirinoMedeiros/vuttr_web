import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4rem;
  padding-bottom: 4rem;

  border-bottom: 1px solid var(--color-lightInk);
`

export const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: 2px;
`

export const SubTitle = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  font-weight: 400;
`

export const Button = styled.button`
  padding: 2rem 0;
  font-size: 2.4rem;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
