import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Category from '@components/Categories/components/Category/Category'
import { fetchCategories } from '@store/features/categoriesSlice'

import "./Categories.scss"
import Loader from '@components/Loader/Loader'

const Categories = () => {
    const dispatch = useDispatch();

    const { categories, loading, error } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(fetchCategories())
    }, [dispatch])

    if (loading) return <Loader />;
    if (error) return <p>Ошибка: {error.message}</p>;
  
    return (
        <div className="categories">
            <div className="category-list">
                {
                    categories && categories.map((item, index) => (
                        <Category
                            key={index}
                            name={item.name}
                            slug={item.slug}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Categories