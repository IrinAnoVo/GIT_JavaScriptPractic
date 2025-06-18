import React from 'react'
import { Route, Routes } from 'react-router'
import Users from './components/Users/Users'
import UserDetails from './components/UserDetails/UserDetails'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/users" element={<Users />}/>
      <Route path="/users/:userId" element={<UserDetails />}/>
    </Routes>
  )
}

export default App