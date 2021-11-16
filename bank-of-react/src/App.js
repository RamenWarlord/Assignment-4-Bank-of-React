import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [balance, changeBalance] = useState(14568.27);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home accountBalance={balance}></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
