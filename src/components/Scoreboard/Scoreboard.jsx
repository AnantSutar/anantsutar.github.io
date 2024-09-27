// src/components/Scoreboard.js
import React from 'react';

const Scoreboard = ({ score }) => {
  return (
    <div className="scoreboard">
      <h2>Your Score: {score}</h2>
    </div>
  );
};

export default Scoreboard;
