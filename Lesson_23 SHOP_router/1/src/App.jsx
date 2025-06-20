import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '@pages/Home/Home'
import Cart from '@pages/Cart/Cart'
import ProductDetail from '@pages/ProductDetail/ProductDetail'
import Products from '@pages/Products/Products'
import Layout from '@components/Layout/Layout'

import "./App.scss"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories/:categorySlug" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Route>
    </Routes>
  )
}

export default App