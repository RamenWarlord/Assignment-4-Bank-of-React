import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <div>
      <h1>Bank of React</h1>

      <Link to="/userProfile">User Profile</Link>
      <Link to="/debits">Debits</Link>
      <Link to="/credits">Credits</Link>
      <AccountBalance accountBalance={props.accountBalance} />
    </div>
  );
}

export default Home;
