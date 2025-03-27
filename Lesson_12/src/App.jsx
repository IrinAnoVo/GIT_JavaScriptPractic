import React from 'react'
import PostItem from './components/PostItem'

const App = () => {
  const posts = [
    {
      title: "Item 1",
      desc: "Lorem, ipsum dolor sit amet consectetur"
    },
    {
      title: "Item 2",
      desc: "Hello world"
    },
    {
      title: "Item 3",
      desc: "Hello world"
    }
  ];

  return (
    <div className='posts'>
      {
        posts && posts.map((post, index) => (
          <PostItem key={index} title={post.title} desc={post.desc} />
        ))
      }
    </div>
  )
}

export default App
