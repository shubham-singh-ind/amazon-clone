import React from "react";
import Carausel from "./Carausel";
import Product from "./Product";

import slides from "./data/slides.json";
import products from "./data/products.json";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Carausel slides={slides} />
      <div className="outer-container">
        <div className="product-container">
          <Product product={products[0]} />
          <Product product={products[1]} />
        </div>
        <div className="product-container">
          <Product product={products[2]} />
          <Product product={products[6]} />
          <Product product={products[4]} />
        </div>
        <div className="product-container">
          <Product product={products[5]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
