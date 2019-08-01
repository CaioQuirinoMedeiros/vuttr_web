import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;

  background: var(--color-white);
  border-radius: 3px;
  box-shadow: 0 10px 15px 0 var(--color-lighterShadow);
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
  color: var(--color-primaryHover);
  margin-right: 1rem;
`;

export const DeleteButton = styled.button`
  position: absolute;
  padding: 0.8rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  top: 0rem;
  right: 0rem;
  color: var(--color-danger);
  transition: all 0.2s;

  &:hover {
    color: var(--color-dangerHover);
  }
`;
