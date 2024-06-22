import React from 'react'
import './Hero.css'
// import hero from '../Assets/hero.png'

function Hero() {
  return (
    <div className="hero-container" id='Hero'>
        <div className="hero-wrapper">
            <div className="hero-left">
                <h1>Bring the Touch of Nature into Your Home with <span>Fresh</span> and <span>Beautiful</span> Plants<span>.</span></h1>
                <p>- Pacira Garden -</p>
            </div>
            <div className="hero-right">
                <div className="hero-image">
                    {/* <img src={hero} alt="" /> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
