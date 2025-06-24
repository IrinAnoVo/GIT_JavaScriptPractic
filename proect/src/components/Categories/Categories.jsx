import React from 'react';
import './Categories.scss';

const Categories = () => {
  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-list">
        <div className="category-item">Fertilizer</div>
        <div className="category-item">Protective products</div>
        <div className="category-item">Planting material</div>
        <div className="category-item">Tools</div>
      </div>
    </section>
  );
};

export default Categories;