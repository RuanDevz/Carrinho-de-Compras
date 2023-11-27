// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Cardbutton.css'
import { FaShoppingCart } from "react-icons/fa";


const Cardbutton = () => {
  return (
    <div>
      <button className='cart-button'>
      <FaShoppingCart />
      <span className='card-status'>2</span>
      </button>
    </div>
  )
}

export default Cardbutton
