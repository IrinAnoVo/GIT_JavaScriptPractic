import React from 'react';
import './Categories.scss';

const allCategories = [
  'Plants',
  'Tools',
  'Soil',
  'Seeds',
  'Fertilizers',
  'Pots',
  'Decor',
  'Watering',
  'Protection',
  'Lighting',
];

const getRandomCategories = (array, count) => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Categories = () => {
  const selectedCategories = getRandomCategories(allCategories, 4);

  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Categories</h2>
        <button className="all-categories">All categories</button>
      </div>

      <div className="categories-grid">
        {selectedCategories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="image-placeholder" />
            <div className="category-title">{category}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
