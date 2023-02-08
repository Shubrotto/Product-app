import React from "react";
import Product from "./product";

function Products({ products }) {
  const findData = products.map((product, index) => (
    <Product key={index} product={product} />
  ));
  return <div className="products">{findData}</div>;
}

export default Products;
