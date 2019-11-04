import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './helpers';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './components/GlobalStyle';
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
      <Provider store={store}>
        <App />
      </Provider>
    </>
  </ThemeProvider>,
  document.getElementById('root'),
);
