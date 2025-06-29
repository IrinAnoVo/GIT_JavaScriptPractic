import React from 'react'
import heartIcon from '../../assets/icons/heartIcon.svg'

const Heart = () => {
  return (
      <button className='heart-button'>
        <img className='heartIcon' src={heartIcon} alt="heartIcon" />
      </button>
  )
}

export default Heart