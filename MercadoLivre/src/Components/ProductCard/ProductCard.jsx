// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';
import AppContext from '../../../../context/AppContext';

const ProductCard = ({ data }) => {
  // eslint-disable-next-line react/prop-types
  const { title, price, thumbnail } = data;

  // Destructure from AppContext using the correct naming convention
  const { cartItems, setCartItems } = useContext(AppContext);

  const AddToCart = () => {
    // Create a new array with the existing cartItems and the new item
    const updatedCartItems = [...cartItems, data];
    
    // Update the state with the new array
    setCartItems(updatedCartItems);
  };
  
  // eslint-disable-next-line react/prop-types
  const modifiedThumbnail = thumbnail.replace(/(.)\.jpg$/, 'W.jpg');

  return (
    <section className='product-card'>
      <img src={modifiedThumbnail} alt='product' className='card-image' />
      <div className='card-info'>
        <h2 className='card-title'>{title}</h2>
        <h3 className='card-price'>{price.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}</h3>
        <p className='card-description'>Descrição do produto</p>
      </div>
      <button  onClick={AddToCart} type='button' className='button-addcart'>
        <FaCartPlus />
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProductCard;
