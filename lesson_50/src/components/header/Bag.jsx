import React from 'react'
import bagIcon from '../../assets/icons/bagIcon.svg'

const Bag = () => {
  return (     
        <button className='bag-button'>
            <img className='bagIcon' src={bagIcon} alt="bagIcon" />
        </button>
  )
}

export default Bag;