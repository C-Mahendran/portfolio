import React, { useState } from 'react';
import './navbar.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'react-bootstrap'; 
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="navbar">
      <nav className="nave">
        <div style={{gap:'40rem'}} className=' d-flex justify-content-center align-items-center'>
        <div className="navuser">
            <a className="head ps-5" href="#navbar-section"><h2>Portfolio</h2></a>
          </div>
         <div className='navmedia'>
                <li><a className="menu" href="#home-section">Home</a></li>
                <li><a className="menu" href="#about-section">About</a></li>
                <li><a className="menu" href="#skills-section">Skills</a></li>
                <li><a className="menu" href="#project-section">Projects</a></li>
                <li><a className="menu" href="#contact-section">Contact</a></li>
          </div>
              
        </div>
        <div className="menu ">
          {/* Offcanvas */}
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="nav-links">
                <li><a className="anger" href="#home-section">Home</a></li>
                <li><a className="anger" href="#about-section">About</a></li>
                <li><a className="anger" href="#skills-section">Skills</a></li>
                <li><a className="anger" href="#project-section">Projects</a></li>
                <li><a className="anger" href="#contact-section">Contact</a></li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        {/* Toggle Button */}
        <button className="toggle-btn" onClick={handleShow}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </div>
  );
};
export default Navbar;
