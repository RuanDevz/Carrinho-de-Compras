// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './Cart.css';
import CartItems from '../CartItems/CartItems';
import AppContext from '../../../context/AppContext';

const Cart = () => {
  const { cartItems, cartVisible, } = useContext(AppContext);
  

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <section className={`cart ${cartVisible ? 'cart-active' : ''}`}>
      <div className='cart-items'>
        {cartItems.map((cartitem) => (
          <CartItems key={cartitem.id} data={cartitem} />
        ))}
      </div>
      <div className='cart-resume'>
        {totalPrice.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div></div>
    </section>
  );
};

export default Cart;
