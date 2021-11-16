import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

function App() {
  const [balance, changeBalance] = useState(14568.27);
  const [user, updateUserInfo] = useState({
    userName: "joe_shmo",
    memberSince: "07/23/96",
  });
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home accountBalance={balance} />
        </Route>
        <Route path="/userProfile">
          <UserProfile
            userName={user.userName}
            memberSince={user.memberSince}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
