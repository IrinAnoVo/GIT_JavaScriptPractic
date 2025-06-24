import React from 'react';
import Header from '../components/Header/Header.jsx';
import Banner from '../components/Banner/Banner.jsx';
import Categories from '../components/Categories/Categories.jsx';
import DiscountBanner from '../components/DiscountBanner/DiscountBanner.jsx';
import Sale from '../components/Sale/Sale.jsx';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <DiscountBanner />
      <Sale />
    </div>
  );
};

export default Home;