// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Header/Header.css'
import './Header.css'
import Cardbutton from '../CardButton/Cardbutton'
import SearchBar from '../Forms/Input'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <SearchBar />
        <Cardbutton />
      </div>
    </header>
  )
}

export default Header
