import React from 'react'
import Logo from './Logo'
import ModeToggle from './ModeToggle'
import Bag from './Bag'
import Heart from './Heart'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        
        {/* Левая часть */}
        <div className="header-left">
          <Logo />
          <ModeToggle />
        </div>

        {/* Центр */}
        <div className="header-center">
          <div className="discount">1 day discount</div>
          <nav>
            <ul>
              <li><a href="#">Main Page</a></li>
              <li><a href="#">Categories</a></li>
              <li><a href="#">All products</a></li>
              <li><a href="#">All sales</a></li>
            </ul>
          </nav>
        </div>

        {/* Правая часть */}
        <div className="header-right">
          <Heart />
          <Bag />
        </div>

      </div>
    </header>
  )
}

export default Header