import React, { useState, useEffect } from "react";

import API_KEY from "./../../env/news.apikey";

import "./NewsList.css";
import "./../../bootstrap.min.css";
import SingleNews from "./SingleNews";

function NewsList() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
    )
      .then((data) => data.json())
      .then(
        (data) => {
          if (data.status !== "error") setNewsList(data);
        },
        (error) => {
          console.log("err", error);
        }
      );
  }, []);

  if (newsList.length) {
    return (
      <div>
        <div className="container">
          {newsList.map((list) => (
            <SingleNews list={list} key={list.publishedAt} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1 className="text-danger">Problem in fetching news.</h1>;
  }
}

export default NewsList;
