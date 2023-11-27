// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Header/Header.css'
import './Header.css'
import SearchBar from '../Forms/SearchBar'
import Cardbutton from '../CardButton/Cardbutton'



const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <SearchBar type='text' placeholder='Buscar Itens' />
        <Cardbutton />
      </div>
    </header>
  )
}

export default Header
