import React from 'react'
import { Link } from 'react-router';

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    const background = `rgb(${r},${g},${b}, 0.1)`;

    return background;
};


const Category = ({name, slug}) => {

    const background = getRandomColor();

    return (
        <div className="category-item" style={{ background }}>
            <Link className="category-item__title" to={`/categories/${slug}`}>{name}</Link>
        </div>
    )
}

export default Category