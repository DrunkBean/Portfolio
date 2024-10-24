import React, { useState } from 'react';
import './NavBar.css';
import Logo from '../img/logo.png'; // Ensure the path is correct

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <div className='nav-ul'>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
        </div>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
};

export default NavBar;
