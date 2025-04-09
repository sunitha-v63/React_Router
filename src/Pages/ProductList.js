import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../Data/ProductData';

function ProductList() {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {ProductData.map((product) => (
          <li key={product.id}>
            <Link to={`${product.id}`}>
              {product.title} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
