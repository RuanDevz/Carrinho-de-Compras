// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './Cardbutton.css';
import { FaShoppingCart } from 'react-icons/fa';
import AppContext from '../../../context/AppContext';

const Cardbutton = () => {
  const { cartItems, setCartVisible, cartVisible } = useContext(AppContext);
  const cartItemCount = cartItems.length;

  return (
    <div>
      <button onClick={() => setCartVisible(!cartVisible)} className='cart-button'>
        <FaShoppingCart />
        {cartItemCount >= 1 && (
          <span className='cart-status'>{cartItemCount}</span>
        )}
      </button>
    </div>
  );
}

export default Cardbutton;
