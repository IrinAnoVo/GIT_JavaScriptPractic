import React from 'react'
import { Route, Routes } from 'react-router'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>
  )
}

export default App