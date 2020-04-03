import { IS_LOGGED_IN, CURRENT_USER } from '../../graphql/queries';
import { SIGNUP_USER } from '../../graphql/mutations';
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import '../../styles/session/SignUpForm.css';

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
    <main className="signup-main">
      <div className="signup-body">
        <Link to="/" className="home-link"><i className="fas fa-home"></i>&nbsp;&nbsp;Home</Link>
        <form className="signup-form" onSubmit={(e) => {
          e.preventDefault()
          signUpUser()
        }} >
          <h1>Free Registration</h1>
          <div>
            <section>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="First Name (required)"
                className="signup-form-input"
              />
            </section>
            <section>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder="Email (required)"
                className="signup-form-input"
              />
            </section>
            <section>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder="Password (required)"
                className="signup-form-input"
              />
            </section>
            <input type="submit" value="SUBMIT" disabled={loading} className="submit-button" />
          </div>
          <div className="cancel-button">
            <Link to="/"><button>CANCEL</button></Link>
          </div>
        </form>
      </div>
    </main>
  )
}