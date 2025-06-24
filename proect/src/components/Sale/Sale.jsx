import React from 'react';
import './Sale.scss';

const Sale = () => {
  return (
    <section className="sale">
      <h2>Sale</h2>
      <div className="sale-items">
        <div className="sale-item">Item -50%</div>
        <div className="sale-item">Item -34%</div>
        <div className="sale-item">Item -25%</div>
      </div>
    </section>
  );
};

export default Sale;