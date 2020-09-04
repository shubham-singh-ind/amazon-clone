import React, { useState, useEffect } from "react";

import Slide from "./Slide";

const Carausel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState({});

  //* ComponentDidMount
  useEffect(() => {
    if (slides.length) {
      setCurrentSlide(slides[0]);
    }
  }, [slides]);

  function handleLeftClick(id) {
    id = id - 1;
    if (id < 0) id = slides.length - 1;
    let thisSlide = slides[id];
    setCurrentSlide(thisSlide);
  }

  function handleRightClick(id) {
    id = id + 1;
    if (id >= slides.length) id = 0;
    let thisSlide = slides[id];
    setCurrentSlide(thisSlide);
  }

  if (currentSlide) {
    return (
      <Slide
        slide={currentSlide}
        handleLeftClick={(id) => handleLeftClick(id)}
        handleRightClick={(id) => handleRightClick(id)}
      />
    );
  }
};

export default Carausel;
