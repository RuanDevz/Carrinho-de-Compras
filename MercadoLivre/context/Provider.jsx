// eslint-disable-next-line no-unused-vars
import React from 'react';
import AppContext from './AppContext';
import PropTypes from 'prop-types';
import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const Provider = ({children}) => {

  const [products,setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItems,
    setCartItems,
    cartVisible,
    setCartVisible
  };
  return (
    <div>
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

export default Provider;

Provider.propTypes = {
  childreen: PropTypes.any.isRequired,
};

