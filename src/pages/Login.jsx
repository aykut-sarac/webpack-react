import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
//import axios from "axios";
import { useAuth } from "../auth/AuthAPI";

// HARD CODED USER CREDIANTIALS
const USERNAME = "Admin";
const PASSWORD = "12345";

export default function Login(props) {
  //States
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  function handleLogin(e) {
    e.preventDefault();
    if (username == USERNAME && password == PASSWORD) {
      setAuthTokens(username);
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <section className="page-section" id="portfolio">
      <div className="container login-form">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-4">
            <div className="row justify-content-center">
              <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
              />
            </div>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="username"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  required
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  <span>Login</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        {isError && (
          <h4 className="text-center">
            The username or password provided were incorrect!
          </h4>
        )}
      </div>
    </section>
  );
}
