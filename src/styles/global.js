import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.min.css";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap");

  * {
    padding: 0;
    margin: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    --color-white: ${props => props.theme.colors.white};
    --color-darkWhite: ${props => props.theme.colors.darkWhite};
    --color-darkerWhite: ${props => props.theme.colors.darkerWhite};
    --color-darkestWhite: ${props => props.theme.colors.darkestWhite};
    --color-mostDarkWhite: ${props => props.theme.colors.mostDarkWhite};
    --color-ink: ${props => props.theme.colors.Ink};
    --color-lightInk: ${props => props.theme.colors.lightInk};
    --color-lighterInk: ${props => props.theme.colors.lighterInk};
    --color-lightestInk: ${props => props.theme.colors.lightestInk};
    --color-darkerBlue: ${props => props.theme.colors.darkerBlue};
    --color-darkBlue: ${props => props.theme.colors.darkBlue};
    --color-blue: ${props => props.theme.colors.blue};
    --color-lightBlue: ${props => props.theme.colors.lightBlue};
    --color-lighterBlue: ${props => props.theme.colors.lighterBlue};
    --color-lightestBlue: ${props => props.theme.colors.lightestBlue};
    --color-mostLightestBlue: ${props => props.theme.colors.mostLightestBlue};
    --color-darkerRed: ${props => props.theme.colors.darkerRed};
    --color-darkRed: ${props => props.theme.colors.darkRed};
    --color-red: ${props => props.theme.colors.red};
    --color-ligtRed: ${props => props.theme.colors.ligtRed};
    --color-lighterRed: ${props => props.theme.colors.lighterRed};
    --color-lightestRed: ${props => props.theme.colors.lightestRed};
    --color-mostLightestRed: ${props => props.theme.colors.mostLightestRed};
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
    color: var(--color-Ink);
    font-size: 1.4rem;
    font-family: 'Source Sans Pro', "Arial", sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-white);
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    &::-webkit-scrollbar-thumb {
      background: var(--color-shadow);
      outline: 1px solid slategrey;
    }
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
    color: inherit;
    cursor: pointer
  }

  input {
    outline: none;
    font-family: inherit;
    border: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: inherit;
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
`;
