import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function UserProfile(props) {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center flex-wrap">User Profile</h1>

      <div className="d-flex justify-content-center flex-wrap">
        Username: {props.userName}
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        Member Since: {props.memberSince}
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <Link to="/">Return to Home</Link>
      </div>
    </div>
  );
}

export default UserProfile;
