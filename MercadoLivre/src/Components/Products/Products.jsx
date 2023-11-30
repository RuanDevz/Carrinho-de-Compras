// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, } from 'react'
import './Products.css'
import FetchProduts from '../../api/FetchProduts'
import ProductCard from '../ProductCard/ProductCard'
import Loading from '../Loading/Loading'


const Products = () => {

  // eslint-disable-next-line no-undef
  const [products, setProducts] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() =>{

    FetchProduts('Whey Protein').then((resp) =>{
      setProducts(resp)
      setLoading(false)
    })

    console.log(products)

  },[])
  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
  )
}

export default Products