import React from "react";
import { useStateValue } from "../StateProvider";

import "./CheckoutProduct.css";

const CheckoutProduct = ({ product }) => {
  const [, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: product.id,
    });
  };
  return (
    <div className="checkout-product-card">
      <img
        src={product.image}
        className="checkout-product-image"
        alt={product.title}
      />
      <div className="checkout-product-description">
        <p className="checkout-product-title">{product.title}</p>
        <p>
          <small>₹</small>
          <strong>{product.price}</strong>
        </p>
        <p className="checkout-product-rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star rating">
                🌟
              </span>
            ))}
        </p>
        <button className="checkout-product-button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
