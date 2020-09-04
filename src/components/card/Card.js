import React from "react";
import "./Card.css";

function Card({ key, card, onChildClick }) {
  return (
    <div className="card">
      <img className="card-img-top" src={card.src} alt={card.alt} />
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.text}</p>
        <button
          className="btn btn-danger"
          onClick={() => onChildClick(card.id)}
        >
          {card.action}
        </button>
      </div>
    </div>
  );
}

export default Card;
