import React from 'react'
import './Services.css'
// import servicesCard from '../Component/servicesCard'
import service1 from '../Assets/service1.png'
import service2 from '../Assets/service2.png'
import service3 from '../Assets/service3.png'


function services() {
  return (
    <div className="services-container" id='Service'>
        <div className="services-wrapper">
            <div className="section-top">
                <h1>Our services</h1>
            </div>
            <div className="section-bottom">
              <div className="services-list-wrapper">
                <div className="column1">
                  <div className="service-title">
                    <img src={service1} alt="" />
                    <h2>Site Planning</h2>
                    <p>Membantu anda dalam merancang dan membangun taman impian anda dengan hasil terbaik</p>
                  </div>
                </div>
                <div className="column2">
                  <div className="service-title">
                    <img src={service2} alt="" />
                    <h2>High Quality Plant</h2>
                    <p>Menyediakan tanaman berkualitas dan memiliki keindahan esetetika yang dapat memperindah taman anda</p>
                  </div>
                </div>
                <div className="column3">
                  <div className="service-title">
                    <img src={service3} alt="" />
                    <h2>Partnership</h2>
                    <p>Telah resmi bekerja sama sebagai mitra dari <span>OKE Garden</span> dalam memberikan pelayanan taman terbaik</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default services
