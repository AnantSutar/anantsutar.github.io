// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'; // Adjust the path as necessary
import Aboutme from './components/Aboutme/Aboutme'; // Adjust the path as necessary
import Navbar from './components/Navbar/Navbar'; // Adjust the path as necessary
import StarryBackground from './components/Home/StarryBackground';
import Mywork from './components/Projects/Mywork';
import Notes from './components/Notes/Notes';
const App = () => {
  return /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(StarryBackground, null), /*#__PURE__*/React.createElement(Navbar, null), " ", /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(Home, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/about",
    element: /*#__PURE__*/React.createElement(Aboutme, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/mywork",
    element: /*#__PURE__*/React.createElement(Mywork, null)
  })));
};
export default App;