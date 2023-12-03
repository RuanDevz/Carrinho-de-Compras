// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import propTypes from 'prop-types'; // Import propTypes
import './Cartitems.css';
import AppContext from '../../../../context/AppContext';

const CartItems = ({ data }) => {
  const {CartItems, setCartItems} = useContext(AppContext);
  const {id, thumbnail, title, price } = data;


  const handleremove = () =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const updateitems = CartItems.filter((itens) => itens.id !== id)
  
    setCartItems(updateitems)
  }

  return (
    <div className="cart-item">
      <div className="cart-content">
        <h3 className="cart-title">{title}</h3>
        <img src={thumbnail} alt={title} className="cart-image" />
        <h4 className="cart-price">{price.toLocaleString('pt-br',{
          style:'currency',
          currency: 'BRL',
        })}</h4>
       <button onClick={handleremove}>remove</button>
      </div>
    </div>
  );
};

CartItems.propTypes = {
  data: propTypes.object.isRequired,
};

export default CartItems;
