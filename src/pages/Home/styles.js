import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;

    & > * {
      width: 100%;
      margin-bottom: 1rem;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  margin-right: 1rem;
  font-size: 1.4rem;
  flex-grow: 1;
  padding: 0.4rem 1rem;
  border: 1px solid var(--color-lightInk);
  border-radius: 3px;
`;
export const CheckInput = styled.label`
  display: flex;
  align-items: center;

  & input {
    margin-right: 0.5rem;
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;
