import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 2.8rem;
    font-size: 1.3rem;
  `,
  medium: css`
    height: 3.4rem;
    font-size: 1.6rem;
  `,
  big: css`
    height: 4.4rem;
    font-size: 1.8rem;
  `
};

const colors = {
  danger: css`
    background: var(--color-danger);
    color: var(--color-white);
    &:hover,
    &:disabled {
      background: var(--color-dangerHover);
    }
  `,
  primary: css`
    background: var(--color-primary);
    color: var(--color-white);
    &:hover,
    &:disabled {
      background: var(--color-primaryHover);
    }
  `,
  secundary: css`
    background: var(--color-mostLightestBlue);
    color: var(--color-blue);
    &:hover,
    &:disabled {
      background: var(--color-lightestBlue);
    }
  `
};

const Button = styled.button.attrs({
  type: "button"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  padding: 0.2rem 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-bottom: 3px solid var(--color-lighterShadow);
  transition: all 0.2s;
  box-shadow: 0 10px 15px 0 var(--color-lighterShadow);

  ${props => sizes[props.size || "medium"]};
  ${props => colors[props.color || "primary"]};

  ${props =>
    props.animate &&
    css`
      &:hover {
        transform: translateY(-2px);
      }
      &:disabled {
        transform: translateY(0);
      }
    `}

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
