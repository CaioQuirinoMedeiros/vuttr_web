import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 2.8rem;
    font-size: 1.2rem;
  `,
  medium: css`
    height: 3.4rem;
    font-size: 1.4rem;
  `,
  big: css`
    height: 4.4rem;
    font-size: 1.8rem;
  `
};

const colors = {
  red: css`
    background: var(--color-darkRed);
    color: var(--color-white);
    &:hover {
      background: var(--color-darkerRed);
    }
  `,
  blue: css`
    background: var(--color-darkBlue);
    color: var(--color-white);
    &:hover {
      background: var(--color-darkerBlue);
    }
  `
};

const Button = styled.button.attrs({
  type: "button"
})`
  border-radius: 3px;
  padding: 0.2rem 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  border-bottom: 3px solid var(--color-lighterShadow);
  transition: all 0.2s;

  ${props => sizes[props.size || "medium"]};
  ${props => colors[props.color || "blue"]};

  ${props =>
    props.animate &&
    css`
      &:hover {
        transform: translateY(-2px);
      }
    `}

  &:active {
    transform: translateY(2px);
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled:hover {
    transform: translate(0);
    background: var(--color-darkerShadow);
  }

  ${props =>
    props.bare &&
    css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.7;
      }
    `}
`;

export default Button;
