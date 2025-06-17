import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const PostDetails = () => {
    const { postId } = useParams()

      const [post, setPost] = useState([])
      const [loading, setLoading] = useState(true)
      const [error, setError] = useState(null)
    
      useEffect(() => {
        const fetchPost = async () => {
            try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            setPost(data)
            } catch (error) {
            setError(error.message)
                } finally {
                    setLoading(false)
                }   
            }

        
            fetchPost()
        }, [postId]);

        if (loading) {  
            return <div>Loading...</div>
        }
        if (error) {
            return <div>Error: {error}</div>
        }

  return (
    <div className='post-details'>
        <div className='post-item'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default PostDetails