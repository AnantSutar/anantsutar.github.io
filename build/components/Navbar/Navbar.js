// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return /*#__PURE__*/React.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "navbar-list"
  }, /*#__PURE__*/React.createElement("li", {
    className: "navbar-item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/",
    className: "navbar-link"
  }, "home")), /*#__PURE__*/React.createElement("li", {
    className: "navbar-item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/about",
    className: "navbar-link"
  }, "about")), /*#__PURE__*/React.createElement("li", {
    className: "navbar-item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: "/mywork",
    className: "navbar-link"
  }, "work"))));
};
export default Navbar;