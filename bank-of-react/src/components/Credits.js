import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";

function Credits(props){
    const [credits, updateCredits] = useState(props.creditInfo);
    const [newCredit, updateNewCredit] = useState({
      id: "",
      description: "",
      amount: "",
      date: "",
    });
    
    return();
}

export default Credits;