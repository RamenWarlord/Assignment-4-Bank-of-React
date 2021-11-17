import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AccountBalance from "./AccountBalance";
function Debits(props) {
  const [debits, updateDebits] = useState(props.debitInfo);
  const [newDebit, updateNewDebit] = useState({
    id: "",
    description: "",
    amount: "",
    date: "",
  });

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

  const handleChange = (e) => {
    updateNewDebit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateNewDebit((prevState) => ({
      ...prevState,
      id: props.debitInfo.length,
      date: Date(),
    }));
    addDebit(newDebit);
    props.addDebit(newDebit);
    props.changeBalance(newDebit.amount);
  };
  if (debits) {
    return (
      <div>
        <h1>Debits</h1>
        <AccountBalance accountBalance={props.accountBalance} />
        <ul>
          {debits.map((debit) => (
            <li key={debit.id}>
              Item: {debit.description} <br />
              Cost: ${debit.amount} <br />
              Date: {debit.date}
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
                value={newDebit.description}
              />
              <label htmlFor="amount">amount</label>
              <input
                type="number"
                name="amount"
                onChange={handleChange}
                value={newDebit.amount}
              />
            </div>
            <button type="submit">Add new debit</button>
          </form>
        </div>
        <Link to="/">Return to Home</Link>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Debits;
