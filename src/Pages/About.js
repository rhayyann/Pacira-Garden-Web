import React from 'react'
import './About.css'
import AboutImage from '../Assets/Gallery/logo.png'

function About() {
  return (
    <div className="about-container" id='About'>
        <div className="about-wrapper">
            <div className="section-left">
                <div className="image-wrapper">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
            <div className="section-right">
                <div className="about-content">
                    <div className="title">
                        <h1>About Us</h1>
                    </div>
                    <div className="desc">
                        <p>Selamat datang di <span>Pacira Garden</span>, destinasi utama Anda untuk segala kebutuhan pembuatan taman. Kami adalah brand yang berdedikasi untuk membawa keindahan alam ke dalam rumah Anda melalui berbagai koleksi tanaman hias yang menakjubkan.</p>
                        <p><span>Pacira Garden</span> didirikan dengan visi dan misi untuk menginspirasi dan mempermudah setiap orang dalam memiliki taman yang indah. Kami percaya bahwa taman tidak hanya memperindah lingkungan, tetapi juga meningkatkan kualitas hidup dengan memberikan suasana yang segar dan menenangkan.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
