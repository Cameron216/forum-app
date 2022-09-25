//add routing and links

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import AccountPage from './pages/AccountPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
