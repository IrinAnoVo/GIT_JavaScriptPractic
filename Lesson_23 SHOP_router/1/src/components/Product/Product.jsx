import React from 'react'
import { FaStar } from "react-icons/fa6";
import "./Product.scss"
import { Link } from 'react-router';

// {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 10.48,
//   "rating": 2.56,
//   "stock": 99,
//   "tags": [
//       "beauty",
//       "mascara"
//   ],
//   "brand": "Essence",
//   "sku": "BEA-ESS-ESS-001",
//   "weight": 4,
//   "dimensions": {
//       "width": 15.14,
//       "height": 13.08,
//       "depth": 22.99
//   },
//   "warrantyInformation": "1 week warranty",
//   "shippingInformation": "Ships in 3-5 business days",
//   "availabilityStatus": "In Stock",
//   "reviews": [
//       {
//           "rating": 3,
//           "comment": "Would not recommend!",
//           "date": "2025-04-30T09:41:02.053Z",
//           "reviewerName": "Eleanor Collins",
//           "reviewerEmail": "eleanor.collins@x.dummyjson.com"
//       },
//       {
//           "rating": 4,
//           "comment": "Very satisfied!",
//           "date": "2025-04-30T09:41:02.053Z",
//           "reviewerName": "Lucas Gordon",
//           "reviewerEmail": "lucas.gordon@x.dummyjson.com"
//       },
//       {
//           "rating": 5,
//           "comment": "Highly impressed!",
//           "date": "2025-04-30T09:41:02.053Z",
//           "reviewerName": "Eleanor Collins",
//           "reviewerEmail": "eleanor.collins@x.dummyjson.com"
//       }
//   ],
//   "returnPolicy": "No return policy",
//   "minimumOrderQuantity": 48,
//   "meta": {
//       "createdAt": "2025-04-30T09:41:02.053Z",
//       "updatedAt": "2025-04-30T09:41:02.053Z",
//       "barcode": "5784719087687",
//       "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
//   },
//   "images": [
//       "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
//   ],
//   "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
// }

const getDiscountPrice = (price, discountPercentage) => {
  const discountPrice = price - (price * (discountPercentage / 100))

  return discountPrice.toFixed(2);
}

const Product = ({product}) => {

  const discountPrice = getDiscountPrice(product.price, product.discountPercentage);

  return (
    <div className='product-item'>
        <div className='product-item__image'>
          <img src={product.thumbnail} alt={product.title} />

          <span>-{parseInt(product.discountPercentage)}%</span>
        </div>

        <div className='product-item__info'>
            <p className='product-item__price'><span>{discountPrice}$</span> <span>{product.price}$</span></p>
            <h3 className='product-item__title'><span>{product.brand}</span> / <Link to={"/"}>{product.title}</Link></h3>
            <p className='product-item__rating'><span><FaStar className='icon'/> {product.rating}</span> - <span>{product.reviews.length} review{product.reviews.length > 1 ? "s" : ""}</span> </p>
        </div>
    </div>
  )
}

export default Product