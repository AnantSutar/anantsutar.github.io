// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" className="navbar-link">about</Link>
        </li>
        <li className="navbar-item">
          <Link to="/mywork" className="navbar-link">work</Link>
        </li>
        {/* <li className="navbar-item">
          <Link to="/notes" className="navbar-link">notes</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
