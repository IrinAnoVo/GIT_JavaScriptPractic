import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      setError(error.message)
        } finally {
            setLoading(false)
        }

    }
    useEffect(() => {
        fetchPosts()
    }, [])

    if (loading) {  
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

  return (
    <div>
        <h2>Posts</h2>
        <div className='post-list'>
            {posts && posts.map(post => 
            <Post 
            key={post.id} 
            id={post.id}
            title={post.title} 
            body={post.body} />)}
        </div>
    </div>
  )
}

export default PostList;
