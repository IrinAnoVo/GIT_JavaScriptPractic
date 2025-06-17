import React from 'react'

const Post = ({title, body}) => {
  return (
    <div className='post-item'>
        <h3><a href=''>{title}</a></h3>
        <p>{body}</p>
    </div>
  )
}

export default Post