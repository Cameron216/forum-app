import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from './extendTheme';
import { UserProvider } from './hooks/UserContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserProvider>
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <App />
      </ChakraProvider>
    </UserProvider>
  </React.StrictMode>
);
