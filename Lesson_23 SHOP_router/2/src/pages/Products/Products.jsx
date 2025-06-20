import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchProductsByCategory } from '@store/features/productsSlice';
import Product from '@components/Product/Product';
import Loader from '@components/Loader/Loader';

import "./Products.scss";

const Products = () => {
    const dispatch = useDispatch();
    const {categorySlug} = useParams();

    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProductsByCategory(categorySlug))
    }, [dispatch, categorySlug])

    
  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <div className="products">
        <h2 className="products__title">Категория: {categorySlug}</h2>

        <div className="product-list">
            {
                products && products.map(product => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products