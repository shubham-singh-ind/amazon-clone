import React, { useState } from "react";
import "./List.css";
import "./../../bootstrap.min.css";

function List({ list, onChildClick, onChildChange }) {
  const [strike, setStrike] = useState("");

  return (
    <li className="list-group-item">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input
              type="checkbox"
              onChange={() => {
                setStrike((strike) => (strike ? "" : "strike"));
                onChildChange(list.id);
              }}
              checked={list.isDone}
            />
          </div>
        </div>
        <textarea readOnly className={strike}>
          {list.text}
        </textarea>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onChildClick(list.id)}
          onChange={() => onChildChange(list.id)}
        >
          x
        </button>
      </div>
    </li>
  );
}

export default List;
