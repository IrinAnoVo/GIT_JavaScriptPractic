import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import "./Product.scss"

const getDiscountPrice = (price, discountPercentage) => {
  const discountPrice = price - (price * (discountPercentage / 100))

  return discountPrice.toFixed(2);
}

const Product = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const discountPrice = getDiscountPrice(product.price, product.discountPercentage);

  return (
    <div className='product-item'>
      <div className='product-item__image'>
        {!imageLoaded && <Skeleton height={300} />}

        <img src={product.thumbnail} alt={product.title} onLoad={() => setImageLoaded(true)} style={{ display: imageLoaded ? "block" : "none" }} />

        <span className='discount'>-{parseInt(product.discountPercentage)}%</span>
      </div>

      <div className='product-item__info'>
        <p className='product-item__price'><span>{discountPrice}$</span> <span>{product.price}$</span></p>
        <h3 className='product-item__title'><span>{product.brand}</span> / <Link to={"/"}>{product.title}</Link></h3>
        <p className='product-item__rating'><span><FaStar className='icon' /> {product.rating}</span> - <span>{product.reviews.length} review{product.reviews.length > 1 ? "s" : ""}</span> </p>
      </div>
    </div>
  )
}

export default Product