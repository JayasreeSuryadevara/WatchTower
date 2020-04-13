import React from 'react';
import '../../styles/socials/CreatedBy.css';

export default () => {
  return (
    <div className="socials-page">
      <div className="social-page-items">
        <h1> Created By </h1>
        <p> Jayasree Suryadevara </p>
        <div>
          <a href="https://www.linkedin.com/in/jayasree-suryadevara-98066415/"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
          <a href="https://github.com/JayasreeSuryadevara"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-4x"></i>
          </a>
        </div>
        <br />
        <p> Jennie Richardson </p>
        <div>
          <a href=""
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
          <a href=""
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-4x"></i>
          </a>
        </div>
        <br />
        <p> Philippe Fonzin </p>
        <div>
          <a href=""
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
          <a href="" target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github fa-4x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
