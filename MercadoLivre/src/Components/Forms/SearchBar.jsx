// eslint-disable-next-line no-unused-vars
import React from 'react'
import Input from './Input'
import Button from './Button'
import './SearchBar.css'

// eslint-disable-next-line react/prop-types
const SearchBar = ({type,placeholder, onchange}) => {
  return (
    <div className='container_bar'>
      <Input type={type} placeholder={placeholder} onchange={onchange} />
      <Button />
      <div>
      </div>
    </div>
  )
}

export default SearchBar
