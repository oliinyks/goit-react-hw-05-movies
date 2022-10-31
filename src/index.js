import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { theme } from './constants/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<BrowserRouter basename="/movies">
	<ThemeProvider theme={theme}>
    <App />
	</ThemeProvider>
	</BrowserRouter>
  </React.StrictMode>
);
