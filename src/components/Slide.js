import React from "react";

import "./Carausel.css";

const Slide = ({ slide, handleLeftClick, handleRightClick }) => {
  return (
    <div className={`content carausel-image ${slide.image}`}>
      <div className="left">
        <button onClick={() => handleLeftClick(slide.id)}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </button>
      </div>

      <div className="center"></div>

      <div className="right">
        <button onClick={() => handleRightClick(slide.id)}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Slide;
