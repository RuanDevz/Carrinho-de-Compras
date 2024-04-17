// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState, } from 'react'
import './Products.css'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'
import AppContext from '../../../context/AppContext'
import fetchProducts from '../../api/FetchProduts'


function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts().then((response) => {
      setProducts(response);
      setLoading(false);
    });
  },[]);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;