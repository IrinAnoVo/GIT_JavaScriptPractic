import React, { useState } from 'react'
import dark from '../../assets/icons/dark.svg'
import light from '../../assets/icons/light.svg'

const ModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMode = (e) => {
    e.preventDefault()
    setIsDarkMode(prev => !prev)
  }

  return (
    <a href="#" onClick={toggleMode}>
        <img className='header-mode' src={isDarkMode ? dark : light } alt="mode" />
    </a>
  )
}

export default ModeToggle;