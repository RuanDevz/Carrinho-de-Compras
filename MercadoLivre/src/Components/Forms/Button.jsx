// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaSearch } from "react-icons/fa";
import './button.css'

// eslint-disable-next-line react/prop-types
const Button = () => {
  return (
    <div>
      <button className='button-search'>
        <FaSearch />
      </button>
    </div>
  )
}

export default Button
