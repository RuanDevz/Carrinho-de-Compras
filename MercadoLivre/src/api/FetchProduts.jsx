// eslint-disable-next-line no-unused-vars
import React from 'react';

const fetchProducts = async (query) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const json = await response.json();

  return json.results;
};

export default fetchProducts;
