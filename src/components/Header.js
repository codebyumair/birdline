import React from 'react'
import logo from '../image/BirdlineLogo.png'
import '../styles/header.css'

const Header = () => {
  return (
    <header style={{ height: '75px' }}>
      <div className="container">
        <div className="logo">
          <img
            className="logo"
            src={logo}
            style={{ width: '200px' }}
            alt="BirdLine Logo"
          />
        </div>
        <div className="search">
          <i className="material-icons">search</i>
        </div>
      </div>
    </header>
  )
}

export default Header
