import React from 'react'
import Text from '../Text/Text'

const Child = (props) => {
  return (
    <>
        <h2>Title</h2>
        <Text title={props.title} />
    </>
  )
}

export default Child