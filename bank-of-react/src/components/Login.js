import React, { useState } from "react";
import { Redirect } from "react-router-dom";

function Login(props) {
  const [user, updateUser] = useState({
    userName: "",
    password: "",
  });
  const [redirect, confirmRedirect] = useState(false);

  const handleChange = (e) => {
    updateUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.mockLogIn(user);
    confirmRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/userProfile" />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            name="userName"
            onChange={handleChange}
            value={user.userName}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
