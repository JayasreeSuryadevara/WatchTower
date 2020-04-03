import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Link to="/login"><button className="log-in-out-button">Log In</button></Link>
  )
};