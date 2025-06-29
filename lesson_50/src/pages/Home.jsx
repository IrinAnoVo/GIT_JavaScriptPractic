import React from 'react'
import Header from '../components/header/Header'
import MainBanner from '../components/categoriesBanner/MainBanner'
import Categories from '../components/categories/Categories'

const Home = () => {
  return (
    <div>
        <Header />
        <MainBanner />
        <Categories />
    </div>
  )
}

export default Home