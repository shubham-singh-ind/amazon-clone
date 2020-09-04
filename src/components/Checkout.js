import React from "react";
import { useStateValue } from "../StateProvider";

import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <hr />
            <p>
              You have no items in your basket, To buy one or more items, click
              'Add to basket' next to the item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            <hr />

            {/*List of checkout products*/}
            {basket.map((item) => (
              <CheckoutProduct product={item} />
            ))}
          </div>
        )}
      </div>

      {/*Subtotal component*/}
      {basket?.length > 0 && (
        <div className="checkout-right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
