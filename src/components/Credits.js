import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import "bootstrap/dist/css/bootstrap.css";

function Credits(props) {
  //state init
  const [credits, updateCredits] = useState(props.creditInfo);
  const [newCredit, updateNewCredit] = useState({
    id: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    updateNewCredit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //same as debit, finalize new transac, add to appjs and creditjs array and update balance
  const handleSubmit = (e) => {
    e.preventDefault();
    updateNewCredit((prevState) => ({
      ...prevState,
      id: props.creditInfo.length,
      date: Date(),
    }));
    props.addCredit(newCredit);
    updateCredits((prevState) => [...prevState, newCredit]);
    props.changeBalance(newCredit.amount);
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center flex-wrap">Credits</h1>
      <div className="d-flex justify-content-center flex-wrap">
        <AccountBalance accountBalance={props.accountBalance} />
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <Link to="/">Return to Home</Link>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center flex-wrap">
          <ul>
            {credits.map((credit) => (
              <li key={credit.id}>
                Item: {credit.description} <br />
                Cost: ${credit.amount} <br />
                Date: {credit.date}
              </li>
            ))}
          </ul>
        </div>
        <div className="col d-flex justify-content-center flex-wrap">
          <div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="description">Item Description</label>
                <input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  value={newCredit.description}
                />
                <br />
                <label htmlFor="amount">Cost of Item</label>
                <input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  value={newCredit.amount}
                />
                <br />
              </div>
              <button type="submit">Add new credit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
