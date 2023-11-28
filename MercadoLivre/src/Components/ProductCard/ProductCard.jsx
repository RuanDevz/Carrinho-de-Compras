// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ProductCard = ({ data }) => {
  const { title, price, thumbnail } = data;

  // Aplicando a substituição usando regex
  const modifiedThumbnail = thumbnail.replace(/(.)\.jpg$/, 'W.jpg');

  return (
    <section className='product-card'>
      <img src={modifiedThumbnail} alt='product' className='card-image' />
      <div className='card-info'>
        <h2 className='card-title'>{title}</h2>
        <h3 className='card-price'>{price.toLocaleString('pt-br',{
          style: 'currency',
          currency: 'BRL'
        })}</h3>
        <p className='card-description'>Descrição do produto</p>
      </div>
      <button type='button' className='button-addcart'>
        <FaCartPlus />
      </button>
    </section>
  );
};

ProductCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ProductCard;
