import React from 'react';
import banner from '../../assets/images/banner.svg' 
import './MainBanner.scss';

const MainBanner = () => {
  return (
    <section className="main-banner">
  <img src={banner} alt="banner" className="banner-image" />
  <div className="banner-content">
    <div className="content-inner">
      <h1>
        Amazing Discounts<br/>
        on Garden Products!
      </h1>
      <button className="banner-button">Check out</button>
    </div>
  </div>
</section>
  );
};

export default MainBanner;