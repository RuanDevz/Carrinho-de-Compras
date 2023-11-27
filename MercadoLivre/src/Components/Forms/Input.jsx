// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './inputsearch.css'

// eslint-disable-next-line react/prop-types
const Input = ({type,placeholder,}) => {

  const [search, setSearch] = useState('')



  return (
    <div className='input-search'>
      <input value={search} type={type} placeholder={placeholder} onChange={(e => setSearch(e.target.value))} required />
    </div>
  )
}

export default Input
