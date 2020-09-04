import React from "react";
import Carausel from "./Carausel";
import slides from "./data/slides.json";

const Welcome = () => {
  return (
    <div>
      <Carausel slides={slides} />
    </div>
  );
};

export default Welcome;
