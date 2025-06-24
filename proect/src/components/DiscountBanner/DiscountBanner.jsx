import React from 'react';
import './DiscountBanner.scss';

const DiscountBanner = () => {
  return (
    <section className="discount-banner">
      <h2>5% off on the first order</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone number" />
        <input type="email" placeholder="Email" />
        <button type="submit">Get a discount</button>
      </form>
    </section>
  );
};

export default DiscountBanner;