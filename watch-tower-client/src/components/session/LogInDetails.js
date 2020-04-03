import React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../graphql/mutations';
import { Link } from 'react-router-dom';
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';
import '../../styles/session/LogInForm.css';

export default () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const [loginUser, { loading, error }] = useMutation(
    LOGIN_USER,
    {
      variables: {
        email,
        password
      },
      update(cache, { data: { login } }) {
        if (!login) setErrorMessage("Invalid Credentials");
        else {
          cache.writeData({ data: { isLoggedIn: login.loggedIn } });
          localStorage.setItem('token', login.token);
        }
      },
      onError() {
        setErrorMessage("Something Went Wrong")
      },
      // refetchQueries: [{ query: CURRENT_USER }, { query: IS_LOGGED_IN }]
    }
  )

  return (
    <main className="login-main">
      <h1 className="login-error">{errorMessage}</h1>
      <section className="login-form">
      <form onSubmit={(e) => {
        e.preventDefault();
        loginUser();
      }}>
        <h1>Sign In</h1>
        <section>
          <label htmlFor="email" className="login-form-labels">Email</label>
          <br />
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            className="login-form-input"
          />
        </section>
        <section>
          <label htmlFor="password" className="login-form-labels">Password</label>
          <br />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            className="login-form-input"
          />
        </section>
        <input type="submit" value="SIGN IN" disabled={loading} className="sign-in-button" />
      </form>
        <div>
          <button className="demo-login" onClick={(e) => {
            e.preventDefault();
            loginUser({ variables: { email: "demo.email.com", password: password }});
          }}>
            Login as Demo User
          </button>
        </div>
        <div className="alternative">
          Not a member? <Link to="/signup" className="register-link">Register here.</Link>
        </div>
      </section>
    </main>
  )
}