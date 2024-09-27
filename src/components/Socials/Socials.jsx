// src/components/Socials.js
import React from 'react';
import './Socials.css'; // Import the CSS file for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const Socials = ({ updateScore }) => {
  const handleSocialClick = () => {
    updateScore(10); // Give 10 points for clicking a social link
  };

  return (
    <div className="socials">
      <h2>Follow Me</h2>
      <ul className="socials-list">
        <li>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" onClick={handleSocialClick}>
            <FaGithub className="social-icon" /> {/* GitHub icon */}
          </a>
        </li>
        <li>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" onClick={handleSocialClick}>
            <FaLinkedin className="social-icon" /> {/* LinkedIn icon */}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
