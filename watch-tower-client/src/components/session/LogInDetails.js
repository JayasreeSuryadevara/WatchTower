import React from 'react';
import { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../graphql/mutations';
import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';

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
      update( cache, { data: { login } }) {
        if (!login) setErrorMessage("Invalid Credentials");
        else {
          cache.writeData({ data: {isLoggedIn: login.loggedIn }});
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
    <>
      <h1>{errorMessage}</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        loginUser();
      }}>
        <input type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" disabled={loading} />
      </form>
    </>
  )
}