import React, { useEffect } from "react";

import "./bootstrap.min.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from "./components/Signin";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  // Piece of code which runs based on a given condition
  // <<<<<<<<< POWERFUL
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      // Any cleanup operation go in here...
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <div className="fixed">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Signin />
          </Route>

          <Route exact path="/checkout">
            <Navigation />
            <Checkout />
          </Route>

          <Route exact path="/">
            <Navigation />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
