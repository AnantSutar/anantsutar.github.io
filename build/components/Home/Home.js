import React, { useState } from 'react';
import Socials from '../Socials/Socials';
import Navbar from '../Navbar/Navbar';
import StarryBackground from './StarryBackground'; // For the starry background
import './Home.css'; // Import the CSS file for styling

const Home = () => {
  const [score, setScore] = useState(0);
  const updateScore = points => {
    setScore(prevScore => prevScore + points);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StarryBackground, null), " ", /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("h1", null, "Hi, I'm Anant Sutar"), /*#__PURE__*/React.createElement("h3", null, "Software Engineer and Data Scientist"), /*#__PURE__*/React.createElement(Socials, {
    updateScore: updateScore
  })));
};
export default Home;