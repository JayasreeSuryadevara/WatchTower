import React from 'react';
import { Link } from 'react-router-dom';

const AccDropNotLogged = () => {

  return (
    <section className="acc-drop-down">
      <div className="acc-drop-down-header">
        <p>ACCOUNT SETTINGS</p>
      </div>
      <div className="acc-drop-down-login-logout">
        <Link to="/login" className="acc-drop-down-login-logout-button">Log In</Link>
        <Link to="/signup" className="acc-drop-down-login-logout-button">Sign Up</Link>
      </div>
    </section>
  )
}
export default AccDropNotLogged;