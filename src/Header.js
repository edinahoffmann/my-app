import React from "react";
import logoImage from './logo.svg';


const Header = () => {

  return (
    <header>
      <nav className="container grid nav-bar">
          <img src={logoImage} alt="Little Lemon logo" />
      </nav>
    </header>
  );
};

export default Header;
