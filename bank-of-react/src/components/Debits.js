import React, { useState } from "react";
import { Link } from "react-router-dom";

function Debits(props) {
  const [debits, updateDebits] = useState(props.debitInfo);

  console.log(props);
  return (
    <div>
      <h1>Debits</h1>
      <pre>{JSON.stringify(props.debitInfo, null, 2)}</pre>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;
