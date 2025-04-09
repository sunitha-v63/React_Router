import React from 'react';
import { useParams } from 'react-router-dom';
import ProductData from '../Data/ProductData';

function ProductDetail() {
  const { id } = useParams();
  const product = ProductData.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <h2>{product.title}</h2>
      <p><h6>Price:</h6> ${product.price}</p>
      <p>{product.description}</p>
    </>
  );
}

export default ProductDetail;
