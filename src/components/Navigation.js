import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

const Navigation = () => {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="nav">
      <Link exact to="/">
        <img className="logo" src="amazon.png" alt="logo" />
      </Link>
      <div className="search">
        <div className="dropdown">
          <select>
            <option>All</option>
            <option>Technology</option>
            <option>Fashion</option>
          </select>
        </div>
        <div className="text-input">
          <input type="text" autoFocus={true} />
        </div>
        <div>
          <button className="btn btn-primary">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="links">
        <div className="info">
          <span className="intro">
            Hello, {user?.email.split("@")[0]} <br />
            <Link
              to={!user && "/login"}
              onClick={login}
              style={{ color: "white", fontWeight: 700, letterSpacing: 1 }}
            >
              {user ? "Signout" : "Signin"}
            </Link>
          </span>
        </div>
        <div className="cart">
          <Link to="/checkout">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            Cart&nbsp;
            <span style={{ color: "white" }}>{basket ? basket.length : 0}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
