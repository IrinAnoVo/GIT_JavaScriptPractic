import React from 'react'
import logo from '../../assets/icons/logo.svg'

const Logo = () => {
  return (
    <a href="/">
        <img className='header-logo' src={logo} alt="logo" />
    </a>
  )
}

export default Logo