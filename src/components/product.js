import React from "react";

function Product({ product }) {
  const { title, image, description, rating } = product;
  return (
    <article className="product">
      <img src={image} className="product__img" alt="Productimage" />
      <div className="product_details">
        <h4 className="title">{title}</h4>
        <p className="product__price">Rating: {rating.rate}/5</p>
        <p className="product__desc">Description:{description}</p>
        <button className="product_btn btn">Add to cart</button>
      </div>
    </article>
  );
}

export default Product;
