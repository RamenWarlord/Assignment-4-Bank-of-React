import React from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
function Home(props) {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center flex-wrap">Bank of React</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <AccountBalance accountBalance={props.accountBalance} />
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center flex-wrap">
          <Link to="/userProfile">User Profile</Link>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          <Link to="/debits">Debits</Link>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          <Link to="/credits">Credits</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
