import React from 'react'
import { Link, Route, Routes } from 'react-router'
import Users from '@components/Users/Users'
import UserDetails from '@components/UserDetails/UserDetails'

const App = () => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<h1><Link to="/users">Go to Users</Link></h1>} 
      />
      <Route path="/users" element={<Users />}/>
      <Route path="/users/:userId" element={<UserDetails />}/>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App