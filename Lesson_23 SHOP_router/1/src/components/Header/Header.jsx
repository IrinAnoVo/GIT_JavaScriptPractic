import React from 'react'
import { NavLink } from 'react-router'
import "./Header.scss"

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header