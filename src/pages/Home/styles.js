import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

export const Header = styled.header`
  width: 100%;
  margin-bottom: 4rem;
`;
export const Title = styled.h1`
  font-size: 5rem;
  letter-spacing: 2px;
`;
export const SubTitle = styled.h2`
  margin-top: 1rem;
  font-size: 3rem;
  font-weight: 400;
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

export const Button = styled.button`
  padding: 0.4rem 2.5rem;
  color: var(--color-white);
  border-radius: 3px;
  border-bottom: 3px solid var(--color-lighterShadow);
  background: var(--color-darkBlue);
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const ToolsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const ToolCard = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  background: var(--color-white);
  border-radius: 3px;
  border: 1px solid var(--color-lightInk);
`;

export const ToolTitle = styled.a.attrs({
  target: "_blank"
})`
  font-size: 2rem;
  flex-basis: 0;
  font-weight: bold;
  color: var(--color-darkerBlue);
  transition: all 0.2s;

  &:hover {
    color: var(--color-blue);
  }
`;

export const ToolDescription = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const ToolTagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ToolTag = styled.span`
  font-weight: bold;
  margin-right: 1rem;
`;
