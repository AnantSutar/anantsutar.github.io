// src/components/Socials.js
import React from 'react';
import './Socials.css'; // Import the CSS file for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import GitHub and LinkedIn icons

const Socials = ({
  updateScore
}) => {
  const handleSocialClick = () => {
    updateScore(10); // Give 10 points for clicking a social link
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "socials"
  }, /*#__PURE__*/React.createElement("h2", null, "Follow Me"), /*#__PURE__*/React.createElement("ul", {
    className: "socials-list"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/AnantSutar",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: handleSocialClick
  }, /*#__PURE__*/React.createElement(FaGithub, {
    className: "social-icon"
  }), " ")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/anant-sutar-8a9a41b9/",
    target: "_blank",
    rel: "noopener noreferrer",
    onClick: handleSocialClick
  }, /*#__PURE__*/React.createElement(FaLinkedin, {
    className: "social-icon"
  }), " "))));
};
export default Socials;