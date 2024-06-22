import React from 'react'
import mosaic from '../Assets/mosaic.png'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-wrapper" id='Contact'>
      <div className="section-left">
        <div className="row1">
          <div className="title">
            <h1>Our Contact</h1>
          </div>
          <div className="list-contact">
              <div className="location">
                <i class="fa-solid fa-location-dot"></i>
                <p>Makassar, jl perintis kemerdekaan km 17b</p>
              </div>   
              <div className="phone">
                <i class="fa-solid fa-phone"></i>
                <p>085395257703</p>
              </div>
              <div className="instagram">
                <i class="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/paciragarden/?img_index=1">paciragarden</a>
              </div>
              <div className="whatsapp">
                <i class="fa-brands fa-whatsapp"></i>
                <a href="https://api.whatsapp.com/send/?phone=%2B6285398012141&text&type=phone_number&app_absent=0">Pacira Garden</a>
              </div>
            </div>
        </div>
        {/* <div className="row2">
          <div className="title">
            <h1>Find Us</h1>
          </div>
          <div className="google-wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3974.079950465056!2d119.51378147498183!3d-5.090773894886129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwMDUnMjYuOCJTIDExOcKwMzAnNTguOSJF!5e0!3m2!1sen!2sid!4v1718957025060!5m2!1sen!2sid" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div> */}
      </div>
      <div className="section-right">
        <img src={mosaic} alt="" />
      </div>
    </div>
  )
}

export default Contact
