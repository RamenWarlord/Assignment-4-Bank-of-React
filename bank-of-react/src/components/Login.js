import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';

function Login(props){
    const[user, updateUser] = useState({
        userName ="",
        password = "",
    });
    const[redirect, confirmRedirect] = useState(false);


    return(
        <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="userName">User Name</label>
            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
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