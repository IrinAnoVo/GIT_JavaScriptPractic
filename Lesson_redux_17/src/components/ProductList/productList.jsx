/*
Создай компонент ProductList, который принимает пропс products — массив объектов вида:

[
  { name: "MacBook", price: 1500 },
  { name: "Наушники", price: 80 },
  { name: "iPhone", price: 1200 }
]

✅ Требования:
Выведи список товаров с названием и ценой.
Если цена товара больше 1000, рядом с названием выводи 🟠 "Дорогой товар".

MacBook — $1500 🟠 Дорогой товар  
Наушники — $80  
iPhone — $1200 🟠 Дорогой товар
*/

import React from 'react';

const ProductList = ({ products }) => {
  return (
    <>
      <h3>Список товаров:</h3>
      <ul>
        {products && products.map((product, index) => (
          <li key={index}>
            {product.name} — ${product.price}{' '}
            {product.price > 1000 ? " - 🟠 Дорогой товар" : " "}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductList;

