import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Product() {
  return (
    <div>
      <h1>Product Section</h1>
      <NavLink to="">All Products</NavLink>
      <Outlet />
    </div>
  );
}

export default Product;
