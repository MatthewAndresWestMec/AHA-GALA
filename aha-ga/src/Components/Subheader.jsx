// Subheader.js

import React from 'react';
import '../Styles/Subheader.css';

const Subheader = () => {
  return (
    <div className="subheader">
      <nav className="subheader-links">
        <a href="#about-us">About Us</a>
        <a href="#volunteer">Volunteer</a>
        <a href="#training">Training</a>
        <a href="#get-involved">Get Involved</a>
        <a href="#healthy-living">Healthy Living</a>
        <a href="#health-topics">Health Topics</a>
      </nav>
    </div>
  );
};

export default Subheader;
