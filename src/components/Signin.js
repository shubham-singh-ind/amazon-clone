import React, { useState } from "react";

import "./Signin.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    const prevEvent = event.target;
    prevEvent.innerHTML = "Signing in...";
    // Stops refresh
    event.preventDefault();
    // Do Login logic here
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // logged in successfully, redirect to home page
        prevEvent.innerHTML = "Signed in...";
        history.push("/");
      })
      .catch((e) => {
        prevEvent.innerHTML = "Signin";
        alert(e.message);
      });
  };
  const register = (event) => {
    const prevEvent = event.target;
    prevEvent.innerHTML = "Creating your account...";
    // Stops refresh
    event.preventDefault();
    // Do register logic here
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // create a user and logged in... redirect to home page
        prevEvent.innerHTML = "Created, Logging in...";
        history.push("/");
      })
      .catch((e) => {
        prevEvent.innerHTML = "Create your Amazon Account";
        alert(e.message);
      });
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-logo">
          <Link to="/">
            <img
              className="amazon-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/175px-Amazon_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="input-container">
          <div className="header">
            <h3>Login</h3>
          </div>
          <form>
            <div className="input">
              <label htmlFor="email">Email or mobile phone number</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoFocus={true}
                className="form-input"
              />
            </div>

            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="form-input"
              />
            </div>

            <div className="input">
              <button className="form-input button" onClick={login}>
                Signin
              </button>
            </div>
            <small>
              By signing in you agree to <br /> Amazon's Conditions of Use &
              Safe.
            </small>
            <hr />
            <div className="input">
              <button
                style={{ border: "1px solid gray", borderRadius: "3px" }}
                onClick={register}
              >
                Create your Amazon Account
              </button>
              <small>
                Enter credentials in above fields to create account.
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
