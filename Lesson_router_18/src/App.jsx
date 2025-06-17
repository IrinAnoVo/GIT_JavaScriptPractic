import React from 'react'
import PostDetails from './components/PostDetails/PostDetails'
import PostList from './components/PostList/PostList'
import { Routes, Route } from 'react-router'

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<PostList />}/>
        <Route path='/posts/:postId' element={<PostDetails />}/>
      </Routes>
    </div>
  )
}

export default App