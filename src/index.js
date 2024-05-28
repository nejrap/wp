import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ShopContextProvider from './Components/Context/ShopContext'; // Ensure correct import path

ReactDOM.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
  document.getElementById('root')
);
