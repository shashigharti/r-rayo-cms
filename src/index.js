import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './packages/Core/Components/GlobalStyle';
import App from './App';

const theme = {
  font: 'Muli',
  fontFallback: 'sans-serif',
  bodyBgColor: '#f2f4f8',
};
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);