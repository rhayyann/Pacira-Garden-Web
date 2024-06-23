import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/white_logo.png';

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const onClick = (anchor) => () => {
    window.location.href = anchor;
    // closeSidebar(); // Remove this line to keep the sidebar open
  };

  return (
    <div className="navbar-wrapper">
      <div className="logo">
        {/* <img src={logo} alt="OACIRA GARDEN Logo" /> */}
        <p>PACIRA GARDEN</p>
      </div>
      <div className="menu-wrapper">
        <ul>
          <li className="menu-item"><a href="#Hero" onClick={onClick('#Hero')}>Home</a></li>
          <li className="menu-item"><a href="#About" onClick={onClick('#About')}>About Us</a></li>
          <li className="menu-item"><a href="#Gallery" onClick={onClick('#Gallery')}>Gallery</a></li>
          <li className="menu-item"><a href="#Service" onClick={onClick('#Service')}>Service</a></li>
          <li className="menu-item"><a href="#Contact" onClick={onClick('#Contact')}>Contact</a></li>
        </ul>
      </div>
      <div className="mobile">
        <i className="fa-solid fa-bars" onClick={toggleSidebar}></i>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <i className="fa-solid fa-xmark" onClick={toggleSidebar}></i>
          <ul>
            <li className="menu-item"><a href="#Hero" onClick={onClick('#Hero')}>Home</a></li>
            <li className="menu-item"><a href="#About" onClick={onClick('#About')}>About Us</a></li>
            <li className="menu-item"><a href="#Gallery" onClick={onClick('#Gallery')}>Gallery</a></li>
            <li className="menu-item"><a href="#Service" onClick={onClick('#Service')}>Service</a></li>
            <li className="menu-item"><a href="#Contact" onClick={onClick('#Contact')}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
