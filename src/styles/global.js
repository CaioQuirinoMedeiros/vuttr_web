import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap");

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-white);
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-shadow);
      outline: 1px solid slategrey;
    }
  }

  html {
    font-size: 62.5%;
    --color-white: ${props => props.theme.colors.white};
    --color-darkWhite: ${props => props.theme.colors.darkWhite};
    --color-darkerWhite: ${props => props.theme.colors.darkerWhite};
    --color-darkestWhite: ${props => props.theme.colors.darkestWhite};
    --color-mostDarkestWhite: ${props => props.theme.colors.mostDarkestWhite};
    --color-ink: ${props => props.theme.colors.ink};
    --color-lightInk: ${props => props.theme.colors.lightInk};
    --color-lighterInk: ${props => props.theme.colors.lighterInk};
    --color-primary: ${props => props.theme.colors.primary};
    --color-primaryHover: ${props => props.theme.colors.primaryHover};
    --color-blue: ${props => props.theme.colors.blue};
    --color-lightestBlue: ${props => props.theme.colors.lightestBlue};
    --color-mostLightestBlue: ${props => props.theme.colors.mostLightestBlue};
    --color-danger: ${props => props.theme.colors.danger};
    --color-dangerHover: ${props => props.theme.colors.dangerHover};
    --color-lightRed: ${props => props.theme.colors.lightRed};
    --color-mostLightestRed: ${props => props.theme.colors.mostLightestRed};
    --color-success: ${props => props.theme.colors.success};
    --color-successHover: ${props => props.theme.colors.successHover};
    --color-darkerShadow: ${props => props.theme.colors.darkerShadow};
    --color-darkShadow: ${props => props.theme.colors.darkShadow};
    --color-shadow: ${props => props.theme.colors.shadow};
    --color-lightShadow: ${props => props.theme.colors.lightShadow};
    --color-lighterShadow: ${props => props.theme.colors.lighterShadow};

    @media ${props => props.theme.mediaQueries.medium} {
      font-size: 60%;
    }
    @media ${props => props.theme.mediaQueries.small} {
      font-size: 56%;
    }
    @media ${props => props.theme.mediaQueries.smallest} {
      font-size: 50%;
    }
  }

  body {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--color-darkWhite);
    color: var(--color-ink);
    font-size: 1.4rem;
    font-family: 'Source Sans Pro', "Arial", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    overflow-y: overlay;
  }

  #root {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  button {
    background: none;
    outline: none;
    border: none;
    font-family: inherit;
    color: inherit;
    cursor: pointer
  }

  textarea {
    font-family: inherit;
  }

  input {
    outline: none;
    font-family: inherit;
    border: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: inherit;
      box-shadow: 0 0 0px 1000px var(--color-lighterShadow) inset;
      -webkit-box-shadow: 0 0 0px 1000px var(--color-lighterShadow) inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    font-family: inherit
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .toast-success {
    border-radius: 3px !important;
    background: var(--color-success) !important;

    &:hover {
      background: var(--color-successHover);
    }
  }

  .toast-error {
    border-radius: 3px !important;
    background: var(--color-danger) !important;

    &:hover {
      background: var(--color-dangerHover);
    }
  }
`;
