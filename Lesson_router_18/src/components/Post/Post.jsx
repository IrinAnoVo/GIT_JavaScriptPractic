import React from 'react'
import { Link } from 'react-router'

const Post = ({id, title, body}) => {
  return (
    <div className='post-item'>
        <h3><Link to={`/posts/${id}`}>{title}</Link></h3>
        <p>{body}</p>
    </div>
  )
}

export default Post;