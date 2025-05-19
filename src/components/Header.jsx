import React from 'react';
import './Header.css'; // link CSS file

const Header = () => {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
