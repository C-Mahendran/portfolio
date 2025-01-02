import React, { useState } from 'react';
import './navbar.css';  // Make sure you include your styles for the navbar
import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  // State to manage the visibility of the navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
return (
    <div className="navbar">
      <nav className="nave">
        <div >
        <a className="head" href="#navbar-section"><h2 className="h">Portfolio</h2></a>
        </div>
        {/* <div className="navigation"> */}
        <div className='menu'>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className=""><a className="anger" href="#home-section">Home</a></li>
            <li className=""><a className="anger" href="#about-section">About</a></li>
            <li className=""><a className="anger" href="#skills-section">Skills</a></li>
            <li className=""><a className="anger" href="#project-section">Projects</a></li>
            <li className=""><a className="anger" href="#contact-section">Contact</a></li>
          </ul>

          {/* Toggle Button */}
          <button className="toggle-btn" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          </div>
        {/* </div> */}
      </nav>
    </div>
  );
};
export default Navbar;
