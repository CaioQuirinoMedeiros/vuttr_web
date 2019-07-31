import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Flip } from "react-toastify";

import Routes from "./routes";

import GlobalStyle from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
        <ToastContainer transition={Flip} autoClose={3500} hideProgressBar />
      </>
    </ThemeProvider>
  );
}

export default App;
