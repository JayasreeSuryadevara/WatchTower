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
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/JayasreeSuryadevara"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
        <br />
        <p> Jennie Richardson </p>
        <div>
          <a href="https://www.linkedin.com/in/jennie-richardson-1531881a5/"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/jbiakcin"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
        <br />
        <p> Philippe Fonzin </p>
        <div>
          <a href="https://www.linkedin.com/in/philippe-benoit-fonzin-805701b7/"
            target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="https://github.com/Philippe-F" target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github fa-3x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
