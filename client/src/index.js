import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";

import App from "./App";
import { AppProvider } from "./pages/context/appContext";

import { ThemeProvider } from "styled-components";
import theme from "./display/utils/theme";
import GlobalStyles from "./display/utils/global";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppProvider>
        <App />
        <GlobalStyles />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
