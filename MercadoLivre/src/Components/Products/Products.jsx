// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Products.css'
import FetchProduts from '../../api/FetchProduts'
import ProductCard from '../ProductCard/ProductCard'

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() =>{

    FetchProduts('headseat').then((resp) =>{
      setProducts(resp)
    })

    console.log(products)

  },[])
  return (
    <section className='products container'>
      {products.map((itens) => <ProductCard key={itens.id} data={itens} /> )}      
    </section>
  )
}

export default Products
