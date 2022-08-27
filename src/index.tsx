import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './extendTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider resetCSS={true} theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
