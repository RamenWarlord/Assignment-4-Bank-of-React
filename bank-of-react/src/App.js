import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";
import Debits from "./components/Debits";

function App() {
  const [balance, updateBalance] = useState(14568.27);
  const [user, updateUserInfo] = useState({
    userName: "joe_shmo",
    memberSince: "07/23/96",
  });
  const [debits, updateDebits] = useState([]);
  const [credits, updateCredits] = useState([]);

  const changeBalance = (change) => {
    updateBalance((prevState) => (+prevState + +change).toFixed(2));
  };

  const addDebit = (debitInfo) => {
    updateDebits((debits) => [
      ...debits,
      {
        id: debitInfo.id,
        description: debitInfo.description,
        amount: debitInfo.amount,
        date: debitInfo.date,
      },
    ]);
  };

  const addCredit = (creditInfo) => {
    updateCredits((credits) => [
      ...credits,
      {
        id: creditInfo.id,
        description: creditInfo.description,
        amount: creditInfo.amount,
        date: creditInfo.date,
      },
    ]);
  };

  const mockLogIn = (logInInfo) => {
    updateUserInfo((prevState) => ({
      ...prevState,
      userName: logInInfo.userName,
    }));
  };

  //react hook useEffect when passing an empty dependency array makes it act like componentDidMount where it only runs once
  useEffect(() => {
    //grabs info from api links and adds it to the initial state
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((res) => {
        console.log(res);
        updateDebits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((res) => {
        console.log(res);
        updateCredits(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home accountBalance={balance} />
          <pre>
            {debits.map((a) => {
              <li key={a.id}>{a}</li>;
            })}
          </pre>
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
        <Route path="/debits">
          <Debits
            debitInfo={debits}
            addDebit={addDebit}
            accountBalance={balance}
            changeBalance={changeBalance}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
