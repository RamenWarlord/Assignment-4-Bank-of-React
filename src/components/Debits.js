import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import "bootstrap/dist/css/bootstrap.css";

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
      <div className="container">
        <h1 className="d-flex justify-content-center flex-wrap">Debits</h1>
        <div className="d-flex justify-content-center flex-wrap">
          <AccountBalance accountBalance={props.accountBalance} />
        </div>
        <div className="d-flex justify-content-center flex-wrap">
          <Link to="/">Return to Home</Link>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center flex-wrap">
            <ul>
              {debits.map((debit) => (
                <li key={debit.id}>
                  Item: {debit.description} <br />
                  Cost: ${debit.amount} <br />
                  Date: {debit.date}
                </li>
              ))}
            </ul>
          </div>
          <div className="col d-flex justify-content-center flex-wrap">
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="description">Item Description </label>
                  <input
                    type="text"
                    name="description"
                    onChange={handleChange}
                    value={newDebit.description}
                  />
                  <br />
                  <label htmlFor="amount">Cost of Item </label>
                  <input
                    type="number"
                    name="amount"
                    onChange={handleChange}
                    value={newDebit.amount}
                  />
                  <br />
                </div>
                <button type="submit">Add new debit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Debits;
