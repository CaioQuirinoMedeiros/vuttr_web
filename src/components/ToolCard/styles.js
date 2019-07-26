import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  background: var(--color-white);
  border-radius: 3px;
  border: 1px solid var(--color-lightInk);
`;

export const Title = styled.a.attrs({
  target: "_blank"
})`
  font-size: 2rem;
  flex-basis: 0;
  font-weight: bold;
  color: var(--color-ink);
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

export const Description = styled.p`
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const TagsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  font-weight: bold;
  color: var(--color-darkBlue);
  margin-right: 1rem;
`;
