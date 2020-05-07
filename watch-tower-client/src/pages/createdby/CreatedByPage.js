import React from 'react';
import '../../styles/socials/CreatedBy.css';
import Jaya from './JayaProfile.jpg';
import Jennie from './JennieProfile.jpg';
import Philippe from './PhilippeProfile.jpg';

export default () => {
  return (
    <div className="socials-page">
      <div className="social-page-items">
        <h1> Created By </h1>
        <div className="profiles">
          <div className="social-profile">
            <img src={Jaya} alt="Jaya" />
            <p> Jayasree Suryadevara </p>
            <br />
            <a href="https://www.linkedin.com/in/jayasree-suryadevara-98066415/"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/JayasreeSuryadevara"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://angel.co/u/jayasree-suryadevara"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-angellist fa-2x"></i>
            </a>
            <a href="https://jayas.page/"
              target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
          <div className="social-profile">
            <img src={Jennie} alt="Jennie" />
            <p> Jennie Richardson </p>
            <br />
            <a href="https://www.linkedin.com/in/jennie-richardson-1531881a5/"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/jbiakcin"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://angel.co/u/jennie-richardson"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-angellist fa-2x"></i>
            </a>
            <a href="http://www.jbiakcin.com/"
              target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
          <div className="social-profile">
            <img src={Philippe} alt="Philippe" />
            <p> Philippe Fonzin </p>
            <br />
            <a href="https://www.linkedin.com/in/philippe-fonzin-805701b7/"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://github.com/Philippe-F" target="_blank"
              rel="noopener noreferrer">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://angel.co/u/philippe-fonzin"
              target="_blank" rel="noopener noreferrer">
              <i className="fab fa-angellist fa-2x"></i>
            </a>
            <a href="https://philippefonzin.dev/"
              target="_blank" rel="noopener noreferrer">
              <i className="fas fa-link fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
