import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';
import { SIGNUP_USER } from '../../graphql/mutations';
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

export default () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [signUpUser, { loading, error }] = useMutation(
    SIGNUP_USER,
    {
      variables: { email, name, password },
      update(cache, { data: { signUp } }) {
        if (!signUp) setErrorMessage('Invalid Credentials');
        else {
          localStorage.setItem('token', signUp.token);
        }
      },
      onError() {
        setErrorMessage('Something went wrong');
      },
      refetchQueries: [{ query: IS_LOGGED_IN }, { query: CURRENT_USER }]
    }
  )
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      signUpUser()
    }} >
      <h1>Sign Up for an Account</h1>
      <div>
        <section>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="email"
          />
        </section>
        <section>
          <label htmlFor="name">First Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="name"
          />
        </section>
        <section>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="password"
          />
        </section>
        <input type="submit" value="Submit" disabled={loading}/>
      </div>
      <div >
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </form>
  )
}
