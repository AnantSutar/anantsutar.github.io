// src/components/Scoreboard.js
import React from 'react';
const Scoreboard = ({
  score
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "scoreboard"
  }, /*#__PURE__*/React.createElement("h2", null, "Your Score: ", score));
};
export default Scoreboard;