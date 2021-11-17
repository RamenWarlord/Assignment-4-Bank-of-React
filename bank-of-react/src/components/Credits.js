import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Credits(props) {
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
    <div>
      <h1>Credits</h1>
      <AccountBalance accountBalance={props.accountBalance} />
      <ul>
        {credits.map((credit) => (
          <li key={credit.id}>
            Item: {credit.description} <br />
            Cost: ${credit.amount} <br />
            Date: {credit.date}
          </li>
        ))}
      </ul>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              value={newCredit.description}
            />
            <label htmlFor="amount">amount</label>
            <input
              type="number"
              name="amount"
              onChange={handleChange}
              value={newCredit.amount}
            />
          </div>
          <button type="submit">Add new credit</button>
        </form>
      </div>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
