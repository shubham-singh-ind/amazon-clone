import React from "react";

import defaultImg from "./../../defaults/noimage.png";

import "./NewsList.css";

function SingleNews({ list }) {
  return (
    <div className="card">
      <a href={list.url} target="_blank" rel="noopener noreferrer">
        <h4>{list.title}</h4>
      </a>
      <p>{list.description}</p>
      <a href={list.url} target="_blank" rel="noopener noreferrer">
        <img src={list.urlToImage || defaultImg} alt={list.titlel} />
      </a>
      <p>{list.content || "N/A"}</p>
      <p>{list.publishedAt || "N/A"}</p>
    </div>
  );
}

export default SingleNews;
