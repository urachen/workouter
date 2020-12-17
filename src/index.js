import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ThemeStyle from './theme.js';
import { ThemeProvider } from '@material-ui/styles';

const theme = ThemeStyle;
ReactDOM.render(
  <ThemeProvider theme={theme}><App /></ThemeProvider>
  ,
  document.getElementById('app')
);