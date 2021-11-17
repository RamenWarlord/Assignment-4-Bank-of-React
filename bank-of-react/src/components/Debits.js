import React from "react";
import { Link } from "react-router-dom";

function Debits(props) {
  const listDebits = props.debitInfo;

  return (
    <div>
      <h1>Debits</h1>
      <Link to="/">Return to Home</Link>
      <ul>{listDebits}</ul>
    </div>
  );
}

export default Debits;
