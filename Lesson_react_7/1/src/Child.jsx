import React from 'react'
import Count from './Count.jsx'

const Child = ({count}) => {
  return (
    <div>
        <Count count={count}/>
    </div>
  )
}

export default Child