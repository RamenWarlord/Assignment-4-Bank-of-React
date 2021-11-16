import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
function App() {
  const [balance, changeBalance] = useState(14568.27);
  const [user, updateUserInfo] = useState({
    userName: "joe_shmo",
    memberSince: "07/23/96",
  });
  const [debits, updateDebits] = useState([]);
  const [credits, updateCredits] = useState([]);

  const addDebit = (debitInfo) => {
    updateDebits(...debits, {
      id: debitInfo.id,
      desc: debitInfo.desc,
      amount: debitInfo.amount,
      date: debitInfo.date,
    });
  };

  const addCredit = (creditInfo) => {
    updateCredits(...credits, {
      id: creditInfo.id,
      desc: creditInfo.desc,
      amount: creditInfo.amount,
      date: creditInfo.date,
    });
  };

  const mockLogIn = (logInInfo) => {
    updateUserInfo((prevState) => ({
      ...prevState,
      userName: logInInfo.userName,
    }));
  };

  //react hook useEffect when passing an empty dependency array makes it act like componentDidMount where it only runs once
  useEffect(() => {
    //insert api requests here
  }, []);

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
        <Route exact path="/login">
          <Login user={user} mockLogIn={mockLogIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
