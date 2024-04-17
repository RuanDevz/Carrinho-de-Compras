// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Provider from '../context/Provider';
import Cart from './Components/Cart/Cart';

const App = () => {
  return (
    <div>
      <Provider>
      <Header />
      <Products />
      <Cart />
      </Provider>
    </div>
  )
}

export default App
