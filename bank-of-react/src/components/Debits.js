import React, { useState } from "react";
import { Link } from "react-router-dom";

function Debits(props) {
  const [debits, updateDebits] = useState(props.debitInfo);
  const [newDebit, updateNewDebit] = useState({
    id: "",
    description: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    updateNewDebit((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDebits((debits) => [
      ...debits,
      {
        id: debits.length,
        description: newDebit.description,
        amount: newDebit.amount,
        date: Date(),
      },
    ]);
  };

  return (
    <div>
      <h1>Debits</h1>
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
              type="text"
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
}

export default Debits;
