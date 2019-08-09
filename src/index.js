import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./helpers";
import { App } from "./App";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";

const theme = {
  font: "Muli",
  fontFallback: "sans-serif",
  bodyBgColor: "#f2f4f8"
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      {/*Apply Global Styles to all components*/}
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </ThemeProvider>,
  document.getElementById("root")
);
