import React from 'react'
import './Footer.css'
import Logo from '../Assets/white_logo.png'
function Footer() {
    const onClick = (anchor) => () => {
        window.location.href = anchor;
        // closeSidebar(); // Remove this line to keep the sidebar open
      };
  return (
    <div className="footer-container">
        <div className="footer-wrapper">
            <div className="left">
                <div className="column1">
                    <div className="logo-wrapper">
                        <div className="logo">
                            <img src={Logo} alt="" />
                            <h1>PACIRA GARDEN</h1>
                        </div>
                        <p>Jl. Perintis Kemerdekaan Km.17, Kota Makassar</p>
                        <p>085398012141</p>
                    </div>
                </div>
                <div className="right-mobile">
                    <h1>Find Us</h1>
                    <div className="google-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3974.079950465056!2d119.51378147498183!3d-5.090773894886129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDUnMjYuOCJTIDExOcKwMzAnNTguOSJF!5e0!3m2!1sen!2sid!4v1718957025060!5m2!1sen!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="column2">
                    <ul className="menu">
                        <p>Navigation</p>
                        <li className="menu-item"><a href="#Hero" onClick={onClick('#Hero')}>Home</a></li>
                        <li className="menu-item"><a href="#About" onClick={onClick('#About')}>About Us</a></li>
                        <li className="menu-item"><a href="#Gallery" onClick={onClick('#Gallery')}>Gallery</a></li>
                        <li className="menu-item"><a href="#Service" onClick={onClick('#Service')}>Service</a></li>
                        <li className="menu-item"><a href="#Contact" onClick={onClick('#Contact')}>Contact</a></li>
                    </ul>
                    <ul className="menu">
                        <p>Social Media</p>
                        <li className="menu-item"><a href="https://www.instagram.com/paciragarden/?img_index=1">Instagram</a></li>
                        <li className="menu-item"><a href="https://api.whatsapp.com/send/?phone=%2B6285398012141&text&type=phone_number&app_absent=0">Whatsapp</a></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <h1>Find Us</h1>
                <div className="google-wrapper">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3974.079950465056!2d119.51378147498183!3d-5.090773894886129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDUnMjYuOCJTIDExOcKwMzAnNTguOSJF!5e0!3m2!1sen!2sid!4v1718957025060!5m2!1sen!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        <div className="all-right-reserved">
            <p>&#169; 2024 Pacira Garden. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
