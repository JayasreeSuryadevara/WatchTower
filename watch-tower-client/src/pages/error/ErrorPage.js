import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {

  return (
    <div className="err-page-main">
      <span className="err-page-content">
        <h1>404 - Page Not Found</h1>
        <p> The page you're looking for doesn't exist!</p>
        <br />
        <Link to='/' className="back-to-home-link">Back to Home Page</Link>

      </span>
    </div>
  )
}

export default ErrorPage;