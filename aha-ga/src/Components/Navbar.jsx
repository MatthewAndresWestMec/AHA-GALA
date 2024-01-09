// Navbar.js

import React from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#benefits">Benefits</a>
        <a href="#gallery">Gallery</a>
        <button className="pillbox-button red">Donate</button>
        <button className="pillbox-button red">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
