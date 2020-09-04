import React from "react";

import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ product }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    // Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: product,
    });
  };

  return (
    <div className="product-card">
      <p>{product.title}</p>
      <p>
        ₹ <strong>{product.price}</strong>
      </p>
      <div className="product-rating">
        {Array(product.rating)
          .fill()
          .map((_, i) => (
            <span key={i} role="img" aria-label="star rating">
              🌟
            </span>
          ))}
      </div>
      <img className="product-image" src={product.image} alt={product.title} />
      <button className="product-button" onClick={addToBasket}>
        Add to cart
      </button>
    </div>
  );
};

export default Product;
