// Header.js

import React from 'react';
import '../Styles/Header.css';

const Header = () => {
  const galaImage = 'https://www.papercitymag.com/wp-content/uploads/2020/02/Dancing-scaled.jpg';

  return (
    <div className="header">
      <img src={galaImage} alt="American Heart Association Gala" className="header-image" />
      <div className="header-overlay">
        <h1 className="header-title">American Heart Association Gala</h1>
        <p className="header-description">
          Join us for an evening of elegance and support a heart-healthy future.
        </p>
        <button className="cta-button">Register Now</button>
      </div>
    </div>
  );
};

export default Header;
